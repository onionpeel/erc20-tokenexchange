const GrtToken = artifacts.require('GrtToken');
const TokenExchange = artifacts.require('TokenExchange');
const BN = web3.utils.BN;

const initialSupply = 1000;
const exchangeRate = 10;
const convertToWei = initial => initial.toString() + '000000000000000000';
const initialSupplyInWei = convertToWei(initialSupply);

module.exports = async function(deployer) {
  await deployer.deploy(GrtToken, initialSupply);
  const grtToken = await GrtToken.deployed();

  await deployer.deploy(TokenExchange, grtToken.address, exchangeRate);
  const tokenExchange = await TokenExchange.deployed();
  //transfer initialSupply * 10 ** 18  tokens
  await grtToken.transfer(tokenExchange.address, new BN(initialSupplyInWei));
};
