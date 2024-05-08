export type GetBlockDetailsParams =
  | { blockHash: string }
  | { blockHeight: number }
  | { absoluteSlot: number }
  | { epoch: number; slot: number };

export type GetAddressBalanceParams = {
  address: string;
};

export type GetAssetDetailsParams = { assetId: string } | { fingerprint: string };

export type GetAssetsByPolicyIdParams = {
  policyId: string;
  pageNo: number;
  limit?: number;
};

export type GetAssetByAddressParams = {
  address: string;
  pageNo: number;
  limit?: number;
};
