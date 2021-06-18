import { PayableOverrides, utils } from 'ethers';
import { cETHcontract } from './assets/contracts';
import { SendToFireBlocks } from './assets/fireblocks';
(async function () {
  if (process.argv.length < 3) {
    console.error('Usage: node dist/supplyToCompound.js <vaultID>');
    process.exit(1);
  }
  console.log('Suppling 1ETH to Compound');
  const params: PayableOverrides = {
    value: utils.parseEther('1'),
  };
  const tx = await cETHcontract.populateTransaction.mint(params);
  await SendToFireBlocks(process.argv[2], tx);
})().catch((err) => {
  console.log('error', err);
  process.exit(1);
});
