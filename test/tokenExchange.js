const TokenExchange = artifacts.require('TokenExchange');
const GrtToken = artifacts.require('GrtToken');
const BN = web3.utils.BN;
const tokenDenominated = amount => amount + '000000000000000000';

contract('TokenExchange', async accounts => {
  let grtToken, tokenExchange, deployer, user;

  before(async () => {
    grtToken = await GrtToken.deployed(1000);
    tokenExchange = await TokenExchange.deployed(grtToken);
    deployer = accounts[0];
    user = accounts[1];
  });

  it('buyTokens() should purchase tokens in exchange for ETH', async () => {
    await tokenExchange.buyTokens({value: web3.utils.toWei('5', 'ether'), from: user});

    let tokenExchangeFinalEthBalance = await web3.eth.getBalance(tokenExchange.address);
    // assert that the ETH transfer happened from user to TokenExchange contract
    assert.equal(tokenExchangeFinalEthBalance, web3.utils.toWei('5', 'ether'), 'GrtToken has a balance of 5 ETH');
    //assert that the TokenExchange contract has a token balance of 950
    const tokenExchangeBalance = await grtToken.balanceOf(tokenExchange.address);
    assert.equal((new BN(tokenExchangeBalance).toString()), tokenDenominated('950'), 'GrtToken has a token balance of 950 * 10 ** 18');
    //assert that the user received 50 tokens
    const userTokenBalance = await grtToken.balanceOf(user);
    assert.equal((new BN(userTokenBalance).toString()), tokenDenominated('50'), 'User has token balance of 50');
  });

  it('sellTokens() should sell tokens in exchange for ETH', async () => {
    await grtToken.approve(tokenExchange.address, tokenDenominated('50'), {from: user});

    await tokenExchange.sellTokens(tokenDenominated('50'), {from: user});

    let tokenExchangeFinalEthBalance = await web3.eth.getBalance(tokenExchange.address);
    assert.equal(tokenExchangeFinalEthBalance, 0, 'GrtToken has a balance of 0 ETH');

    const tokenExchangeBalance = await grtToken.balanceOf(tokenExchange.address);
    assert.equal((new BN(tokenExchangeBalance).toString()), tokenDenominated('1000'), 'GrtToken has a token balance of 950 * 10 ** 18');
    //
    const userTokenBalance = await grtToken.balanceOf(user);
    assert.equal((new BN(userTokenBalance).toString()), 0, 'User has token balance of 0');
  })
});
