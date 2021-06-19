import { ethers } from 'ethers';
import { Chain } from 'fireblocks-defi-sdk';
import contractAddress from './contractAddress';
import contractABI from './contractABI';

export const cETHcontract = new ethers.Contract(
  contractAddress.Tokens.cETH.address,
  contractABI.cETH,
  ethers.getDefaultProvider(Chain.KOVAN)
);
export const comptrollerContract = new ethers.Contract(
  contractAddress.Contracts.Comptroller,
  contractABI.Comptroller,
  ethers.getDefaultProvider(Chain.KOVAN)
);
export const priceContract = new ethers.Contract(
  contractAddress.Contracts.PriceFeed,
  contractABI.PriceFeed,
  ethers.getDefaultProvider(Chain.KOVAN)
);
export const DAIcontract = new ethers.Contract(
  contractAddress.Contracts.DAI,
  contractABI.DAI,
  ethers.getDefaultProvider(Chain.KOVAN)
);
export const cDAIcontract = new ethers.Contract(
  contractAddress.Contracts.cDAI,
  contractABI.cDAI,
  ethers.getDefaultProvider(Chain.KOVAN)
);
export const cUSDTcontract = new ethers.Contract(
  contractAddress.Contracts.cUSDT,
  contractABI.cUSDT,
  ethers.getDefaultProvider(Chain.KOVAN)
);
export const USDTcontract = new ethers.Contract(
  contractAddress.Contracts.USDT,
  contractABI.USDT,
  ethers.getDefaultProvider(Chain.KOVAN)
);
