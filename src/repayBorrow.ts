import { cUSDTcontract, USDTcontract } from './assets/contracts';
import contractAddress from './assets/ropstenContractAddress';
import { SendToFireBlocks } from './assets/fireblocks';

(async function () {
  if (process.argv.length < 4) {
    console.error(
      'Usage: node dist/repayBorrow.js <YOUR VAULT ID> <YUR ETH ADDRESS>'
    );
    process.exit(1);
  }
  const underlyingDecimals = 8;
  console.log('getting borrowed balance...');
  let cUSDT = await cUSDTcontract.callStatic.borrowBalanceCurrent(
    process.argv[3]
  );
  console.log(`you borrowed ${cUSDT / 1e6} USDT`);
  console.log('repaying the borrow...');
  console.log('approving...');
  const underlyingToRepay = (100 * Math.pow(10, underlyingDecimals)).toString();
  const approveTx = await USDTcontract.populateTransaction.approve(
    contractAddress.Contracts.cUSDT,
    underlyingToRepay
  );
  await SendToFireBlocks(process.argv[2], approveTx);
  let tx = await cUSDTcontract.populateTransaction.repayBorrow(
    underlyingToRepay
  );
  await SendToFireBlocks(process.argv[2], tx);
})().catch((err) => {
  console.log('error', err);
  process.exit(1);
});
