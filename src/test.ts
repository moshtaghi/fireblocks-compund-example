const Compound = require('@compound-finance/compound-js');
const compound = new Compound('ropsten');
let price;

(async function () {
  price = await compound.getPrice(Compound.cETH); // supports cTokens too
  console.log('eth', price);
})().catch(console.error);
