import { PopulatedTransaction } from 'ethers';
import { Chain, EthersBridge } from 'fireblocks-defi-sdk';
import { FireblocksSDK } from 'fireblocks-sdk';
import * as fs from 'fs';
import path from 'path';

export const FireBlocksClient = async () => {
  const apiKey = 'd0ff995c-f05e-5408-9de4-109a43fa2cb4';
  const apiSecret = fs.readFileSync(
    path.resolve(__dirname, '../../fireblocks.key'),
    'utf8'
  );
  return new FireblocksSDK(apiSecret, apiKey);
};

export const Bridge = (fireblocksApiClient, vaultAccountId: string) => {
  return new EthersBridge({
    fireblocksApiClient,
    vaultAccountId: vaultAccountId,
    chain: Chain.KOVAN,
  });
};

export const SendToFireBlocks = async (
  vaultAccountId: string,
  tx: PopulatedTransaction
) => {
  const bridge = Bridge(await FireBlocksClient(), vaultAccountId);
  const res = await bridge.sendTransaction(tx).catch((err) => {
    console.log('sendTransaction failed.', err);
  });
  if (!res) {
    return;
  }
  console.log('Waiting for the transaction to be signed and mined');
  const txHash = await bridge.waitForTxHash(res.id).catch((err) => {
    console.log('waitForTxHash failed.', err);
  });
  console.log('result:', res);
  console.log('txHash:', txHash);
};
