import { cETHcontract, cUSDTcontract } from './assets/contracts';
(async function () {
  if (process.argv.length < 3) {
    console.error('Usage: node dist/borrowBalance.js <YUR KOVAN ETH ADDRESS>');
    process.exit(1);
  }
  let cETH = await cETHcontract.callStatic.borrowBalanceCurrent(
    process.argv[2]
  );
  let cUSDT = await cUSDTcontract.callStatic.borrowBalanceCurrent(
    process.argv[2]
  );
  console.log('ETH:', cETH / 1e18, 'USDT:', cUSDT / 1e6);
})().catch((err) => {
  console.log('======> error', err);
  process.exit(1);
});
