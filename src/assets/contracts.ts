import { ethers } from 'ethers';
import { Chain } from 'fireblocks-defi-sdk';
import contractAddress from './contractAddress';
import contractABI from './contractABI';

export const cETHcontract = new ethers.Contract(
  contractAddress.Tokens.cETH.address,
  contractABI.cETH,
  ethers.getDefaultProvider(Chain.KOVAN)
);
