const GrtToken = artifacts.require('GrtToken');
const BN = web3.utils.BN

contract('GrtToken', async accounts => {
  it('constructor() should create a GRT token with 1000 units', async () => {
    const grtToken = await GrtToken.deployed(1000);
    // //retrieve values set when the constructor is run
    const name = await grtToken.name();
    const symbol = await grtToken.symbol();
    const decimals = await grtToken.decimals();
    const totalSupply = await grtToken.totalSupply();
    //assertions
    assert.equal(name, 'Great Token', 'Token is named, "Great Token"');
    assert.equal(symbol, 'GRT', 'Token symbol is GRT');
    assert.equal(decimals.toNumber(), 18, 'Token has 18 decimals');
    let expectedTotalSupply = '1000000000000000000000';
    assert.equal(new BN(totalSupply).toString(), expectedTotalSupply, 'Total supply is 1000 * 10 **18');
  });
});
