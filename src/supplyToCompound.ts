import { PayableOverrides, utils } from 'ethers';
import { cETHcontract } from './assets/contracts';
import { SendToFireBlocks } from './assets/fireblocks';
(async function () {
  if (process.argv.length < 4) {
    console.error(
      'Usage: node dist/supplyToCompound.js <YOUR VAULT ID> <ETH QTY>'
    );
    process.exit(1);
  }
  console.log('Suppling ETH to Compound');
  const params: PayableOverrides = {
    value: utils.parseEther(process.argv[3]),
  };
  const tx = await cETHcontract.populateTransaction.mint(params);
  await SendToFireBlocks(process.argv[2], tx);
})().catch((err) => {
  console.log('error', err);
  process.exit(1);
});
