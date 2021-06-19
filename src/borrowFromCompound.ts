import contractAddress from './assets/contractAddress';
import {
  comptrollerContract,
  priceContract,
  cUSDTcontract,
} from './assets/contracts';
import { SendToFireBlocks } from './assets/fireblocks';

(async function () {
  if (process.argv.length < 4) {
    console.error(
      'Usage: node dist/borrowFromCompound.js <YOUR VAULT ID> <YUR KOVAN ETH ADDRESS>'
    );
    process.exit(1);
  }
  const assetName = 'USDT'; // for the log output lines
  const underlyingDecimals = 6; // Number of decimals defined in this ERC20 token's contract

  console.log('Calculating your liquid assets in the protocol...');
  let { 1: liquidity } =
    await comptrollerContract.callStatic.getAccountLiquidity(process.argv[3]);
  liquidity = liquidity / 1e18;

  console.log('Fetching cETH collateral factor...');
  let { 1: collateralFactor } = await comptrollerContract.callStatic.markets(
    contractAddress.Tokens.cETH.address
  );
  collateralFactor = (collateralFactor / 1e18) * 100; // Convert to percent

  console.log(`Fetching ${assetName} price from the price feed...`);
  let underlyingPriceInUsd = await priceContract.callStatic.price(assetName);
  underlyingPriceInUsd = underlyingPriceInUsd / 1e6; // Price feed provides price in USD with 6 decimal places

  console.log(`Fetching borrow rate per block for ${assetName} borrowing...`);
  let borrowRate = await cUSDTcontract.callStatic.borrowRatePerBlock();
  borrowRate = borrowRate / Math.pow(10, underlyingDecimals);

  console.log(
    `\nYou have ${liquidity} of LIQUID assets (worth of USD) pooled in the protocol.`
  );
  console.log(
    `You can borrow up to ${collateralFactor}% of your TOTAL collateral supplied to the protocol as ${assetName}.`
  );
  console.log(`1 ${assetName} == ${underlyingPriceInUsd.toFixed(6)} USD`);
  console.log(
    `You can borrow up to ${
      liquidity / underlyingPriceInUsd
    } ${assetName} from the protocol.`
  );
  console.log(
    `NEVER borrow near the maximum amount because your account will be instantly liquidated.`
  );
  console.log(
    `\nYour borrowed amount INCREASES (${borrowRate} * borrowed amount) ${assetName} per block.\nThis is based on the current borrow rate.\n`
  );

  const underlyingToBorrow = 50;
  console.log(`Now attempting to borrow ${underlyingToBorrow} ${assetName}...`);
  const scaledUpBorrowAmount = (
    underlyingToBorrow * Math.pow(10, underlyingDecimals)
  ).toString();
  const tx = await cUSDTcontract.populateTransaction.borrow(
    scaledUpBorrowAmount
  );
  await SendToFireBlocks(process.argv[2], tx);
})().catch((err) => {
  console.log('error', err);
  process.exit(1);
});
