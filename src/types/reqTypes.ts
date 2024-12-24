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

export type GetAssetHoldersByPolicyIdParams = {
  policyId: string;
  pageNo: number;
  limit?: number;
};

export type GetAssetHoldersByAssetIdParams = {
  assetId: string;
  pageNo: number;
  limit?: number;
};

export type GetAssetsMetadataParams = {
  assetIds: Array<string>;
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

export type postSubmitTransactionParams = {
  tx: Buffer;
};

export type GetTransactionSummaryParams = {
  hash: string;
};

export type GetUtxoListParams = { pageNo: number; limit?: number } & (
  | { paymentAddress: string }
  | { rewardAddress: string }
);

export type GetCCHotDetailsParams = {
  hotHex: string;
};

export type GetCCMemberDetailsParams = {
  coldHex: string;
};

export type GetCommitteeMembersParams = {
  pageNo: number;
  limit: number;
  includeExpired: boolean;
};

export type GetDRepInformationParams = {
  dRepId: string;
};

export type GetDRepListParams = {
  pageNo: number;
  limit: number;
  search: string | undefined;
};

export type GetGovActionParams = {
  actionId: string;
};

export type GetVotesByVoterParams = {
  pageNo: number;
  limit: number;
  voterHex: string;
};

export type GetVotesByActionParams = {
  pageNo: number;
  limit: number;
  actionId: string;
};
