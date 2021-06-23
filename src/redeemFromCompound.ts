import { PopulatedTransaction } from 'ethers';
import { cETHcontract } from './assets/contracts';
import { SendToFireBlocks } from './assets/fireblocks';

(async function () {
  if (process.argv.length < 4) {
    console.error(
      'Usage: node dist/redeemFromCompound.js <YOUR VAULT ID> <YUR ETH ADDRESS>'
    );
    process.exit(1);
  }
  const cTokenBalance = await cETHcontract.callStatic.balanceOf(
    process.argv[3]
  );
  console.log('Redeeming from compound...');
  const tx: PopulatedTransaction =
    await cETHcontract.populateTransaction.redeem(cTokenBalance);
  await SendToFireBlocks(process.argv[2], tx);
})().catch((err) => {
  console.log('error', err);
  process.exit(1);
});
