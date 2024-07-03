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

export type GetPoolDetails = {
  poolId: string;
};

export type GetPoolStatsParams = {
  poolId: string;
};

export type GetPoolListParams = {
  pageNo: number;
  search?: string;
  retiredPools?: boolean;
  sortBy?: "name" | "margin" | "pledge" | "random";
  order?: "asc" | "desc";
  limit?: number;
};

export type GetPoolListExpireParams = {
  pageNo: number;
  limit?: number;
};

export type GetExpiredPoolsParams = {
  pageNo: number;
  limit?: number;
};

export type GetStakeKeyDetailsParams = {
  rewardAddress: string;
};

export type GetAddressesByStakeKey = {
  rewardAddress: string;
  pageNo: number;
  limit?: number;
};

export type GetTransactionDetailsParams = {
  hash: string;
};

export type GetTransactionListByAddressParams = {
  address: string;
  pageNo: number;
  limit?: number;
  order?: "asc" | "desc";
};
