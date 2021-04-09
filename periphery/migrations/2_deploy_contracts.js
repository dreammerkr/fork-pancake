const Router = artifacts.require('PancakeRouter01.sol');
const WETH = artifacts.require('WBNB.sol');

module.exports = async function (deployer, _network, addresses) {
  let weth;
  const FACTORY_ADDRESS = '0x0051189BcBA08406a1a7711972FDDa32ad377746';

  if(_network === 'mainnet') {
    weth = await WETH.at('0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c');
  } else {
    await deployer.deploy(WETH);
    weth = await WETH.deployed();
  }

  await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
};