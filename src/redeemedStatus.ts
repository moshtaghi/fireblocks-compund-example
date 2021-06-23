import { cETHcontract } from './assets/contracts';
(async function () {
  const ethDecimals = 18;

  if (process.argv.length < 3) {
    console.error('Usage: node dist/redeemedStatus.js <YUR ETH ADDRESS>');
    process.exit(1);
  }
  console.log('getting exchangeRate and Balance of cETH...');
  const exchangeRateCurrent =
    await cETHcontract.callStatic.exchangeRateCurrent();
  const cTokenBalance = await cETHcontract.callStatic.balanceOf(
    process.argv[2]
  );
  let humanExchangeRate =
    exchangeRateCurrent / Math.pow(10, 18 + ethDecimals - 8);
  let humancTokenBalance = cTokenBalance / 1e8;
  console.log('exchangerate:', humanExchangeRate);
  console.log('cETH Token Balance:', humancTokenBalance);
  console.log('current earned ETH:', humancTokenBalance * humanExchangeRate);
})().catch((err) => {
  console.log('error', err);
  process.exit(1);
});
