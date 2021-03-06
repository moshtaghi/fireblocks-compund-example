import { comptrollerContract } from './assets/contracts';
import contractAddress from './assets/ropstenContractAddress';
import { SendToFireBlocks } from './assets/fireblocks';

(async function () {
  if (process.argv.length < 3) {
    console.error('Usage: node dist/exitMarkets.js <YOUR VAULT ID>');
    process.exit(1);
  }

  let tx = await comptrollerContract.populateTransaction.exitMarket(
    contractAddress.Tokens.cETH.address
  );

  await SendToFireBlocks(process.argv[2], tx);
})().catch((err) => {
  console.log('======> error', err);
  process.exit(1);
});
