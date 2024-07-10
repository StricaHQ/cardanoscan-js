import * as Types from "./core";

export type Address = {
  hash: string;
  balance: string;
};

export type Block = {
  hash: string;
  previousBlockHash: string | null;
  blockHeight: number;
  totalFees: string;
  slot: number;
  epoch: number;
  absSlot: number;
  timestamp: Date;
  txCount: number;
  assetTxCount: number;
  totalOutput: string;
  slotLeader: string | null;
  bodySize: number;
  protocolVersion?: string;
  vrfVKey?: string;
  nonceVrf?: {
    natural: string;
    cert: string;
  };
  leaderVrf?: {
    natural: string;
    cert: string;
  };
  vrfResult?: Array<string>;
  operationalCert?: {
    hotVKey: string;
    sequenceNumber: number;
    kesPeriod: number;
    sigma: string;
  };
};

export type PaginatedBlocks = {
  blocks: Array<Block>;
  count: number;
  pageNo: number;
  limit: number;
};

export type NetworkState =
  | {
      circulatingSupply: string;
      reserves: string;
      treasury: string;
      liveCirculatingSupply: string;
    }
  | undefined;

export type Pool = {
  poolId: string;
  vrfKeyHash?: string;
  status: boolean;
  name?: string | null;
  ticker?: string | null;
  website?: string | null;
  description?: string | null;
  margin?: string;
  cost?: string;
  declaredPledge?: string;
  rewardAccount?: string;
  owners?: Array<string>;
  registeredOn?: Date;
  metadata?: {
    url: string | null;
    metadataHash: string | null;
  };
  relays?: Array<{
    port?: number | null;
    ipv4?: string | null;
    ipv6?: string | null;
    dnsName?: string;
    srvName?: string;
  }>;
};

export type PoolStats = {
  poolId: string;
  lifetimeBlocks: number;
  currentEpochBlocks: number;
  lifetimeRewards: string;
  activePledge: string;
  interest: number;
  liveStake: string;
  saturationLevel: string;
};

export type PaginatedPools = {
  pageNo: number;
  limit: number;
  pools: Array<Pool>;
  count: number;
};

export type PaginatedExpiringPools = {
  pageNo: number;
  limit: number;
  pools: Array<{ poolId: string; epoch: number }>;
  count: number;
};

export type PaginatedExpiredPools = {
  pageNo: number;
  limit: number;
  pools: Array<{ poolId: string; epoch: number }>;
  count: number;
};

export type Token = {
  policyId: string;
  assetName: string;
  fingerprint: string;
  assetId: string;
  totalSupply: string;
  txCount: number;
  mintedOn: Date;
};

export type PaginatedTokens = {
  pageNo: number;
  limit: number;
  tokens: Array<Token>;
  count: number;
};

export type StakeKeyDetails = {
  poolId?: string | null;
  rewardAddress: string;
  stake?: string;
  status?: boolean;
  rewardsAvailable?: string;
  rewardsWithdrawn?: string;
};

export type AddressesByStakeKey = {
  addresses: Array<Address>;
  count: number;
  pageNo: number;
  limit: number;
};

export type TransactionInput = {
  index: number;
  txId: string;
  address: string | null;
  value: string;
  tokens?: Array<{
    policyId: string;
    assetName: string;
    fingerprint: string;
    assetId: string;
    value: string;
  }>;
  datum?: {
    hash: string;
    value: string;
  };
  scriptRef?: Types.ScriptRef;
};

export type TransactionOutput = {
  value: string;
  address: string;
  tokens?: Array<{
    policyId: string;
    assetName: string;
    fingerprint: string;
    assetId: string;
    value: string;
  }>;
  datum?: {
    hash: string;
    value: string;
  };
  scriptRef?: Types.ScriptRef;
};

export type TransactionCertificates = {
  stakeRegistrations?: Array<{
    index: number;
    rewardAddress: string;
  }>;
  stakeDeRegistrations?: Array<{
    index: number;
    rewardAddress: string;
  }>;
  stakeDelegations?: Array<{
    index: number;
    rewardAddress: string;
    poolKeyHash: string;
  }>;
  poolRegistrations?: Array<Types.PoolRegistrationCertT>;
  poolDeRegistrations?: Array<Types.PoolRetirementCertT>;
  instantaneousRewards?: Array<{
    index: number;
    pot: number;
    rewards: Array<{
      rewardAddress: string;
      amount: string;
    }>;
    value: string;
  }>;
  genesisDelegations?: Array<Types.GenDelegationCertT>;
};

export type Transaction = {
  hash: string;
  blockHash: string;
  fees: string;
  slot: number;
  epoch: number;
  blockHeight: number;
  absSlot: number;
  timestamp: Date;
  index: number;
  inputs: Array<TransactionInput>;
  collateral?: Array<TransactionInput>;
  outputs: Array<TransactionOutput>;
  collateralOutput?: TransactionOutput;
  totalCollateral?: string;
  referenceInputs?: Array<Types.ReferenceInput>;
  certificate?: TransactionCertificates;
  withdrawals?: Array<{
    rewardAddress: string;
    amount: string;
  }>;
  metadata?: Types.Metadata;
  update?: {
    proposals: Array<{
      genesisHash: string;
      parameter: Types.ProtocolParameter;
    }>;
    epoch: number;
  };
  mint?: Array<Types.Token>;
  scriptDataHash?: string;
  redeemers?: Array<Types.Redeemer>;
  status: boolean;
  ttl?: {
    timestamp: Date;
    slot: number;
  };
};

export type PaginatedTransactions = {
  pageNo: number;
  limit: number;
  transactions: Array<Transaction>;
  count: number;
};
