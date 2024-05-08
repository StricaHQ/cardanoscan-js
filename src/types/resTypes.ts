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
  vrfVKey?: string;
  operationalCert?: {
    hotVKey: string;
    sequenceNumber: number;
    kesPeriod: number;
    sigma: string;
  };
  protocolVersion?: string;
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
      treasury: string;
      reserves: string;
      liveCirculatingSupply: string;
    }
  | undefined;

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
  tokens: Array<Token>;
  count: number;
  pageNo: number;
  limit: number;
};
