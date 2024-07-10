import * as BabbageTypes from "@stricahq/cardano-codec/dist/types/babbageTypes";

export type ScriptRef = {
  type: string;
  script: string | BabbageTypes.NativeScript;
  hash: string;
};

export type Token = {
  policyId: string;
  assetName: string;
  fingerprint: string;
  assetId: string;
  value: string;
};

export type PoolRetirementCert = {
  poolKeyHash: string;
  epoch: number;
};

export type PoolRelay = {
  port?: number | null;
  ipv4?: string | null;
  ipv6?: string | null;
  dnsName?: string;
  srvName?: string;
};

export type PoolRegistrationCert = {
  operator: string;
  vrfKeyHash: string;
  pledge: string;
  cost: string;
  margin: Array<number>;
  rewardAccount: string;
  poolOwners: Array<string>;
  relays: Array<PoolRelay>;
  poolMetadata: {
    url: string;
    metadataHash: string;
  } | null;
};

export type MetaDatum = {
  label: string;
  value: string;
};

export type Redeemer = {
  index: number;
  tag: string;
  data: string;
  exUnits: {
    mem: number;
    steps: number;
  };
};

export type GenDelegationCert = {
  genesisHash: string;
  genesisDelegateHash: string;
  vrfKeyHash: string;
};

export type Metadata = {
  hash: string;
  data: Array<MetaDatum>;
};

export type CostMdls = {
  language: number;
  costModel: Array<number>;
};

export type ProtocolParameter = {
  minFeeA?: string;
  minFeeB?: string;
  maxBlockBodySize?: number;
  maxTransactionSize?: number;
  maxBlockHeaderSize?: number;
  keyDeposit?: string;
  poolDeposit?: string;
  maxEpoch?: number;
  n?: number;
  pledgeInfluence?: number;
  expansionRate?: number;
  treasuryGrowthRate?: number;
  d?: number;
  entropy?: [string, string];
  protocolVersion?: [number, number];
  minPoolCost?: string;
  adaPerUtxoByte?: string;
  costMdls?: Array<CostMdls>;
  exUnitPrices?: {
    mem: [string, string];
    step: [string, string];
  };
  maxTxExUnits?: {
    mem: number;
    step: number;
  };
  maxBlockExUnits?: {
    mem: number;
    step: number;
  };
  maxValueSize?: string;
  collateralPercent?: number;
  maxCollateralInputs?: number;
  minUtxoValue?: number;
};

export type GenDelegationCertT = GenDelegationCert & {
  index: number;
};

export type PoolRegistrationCertT = PoolRegistrationCert & {
  index: number;
};

export type PoolRetirementCertT = PoolRetirementCert & {
  index: number;
};

export type ReferenceInput = {
  index: number;
  txId: string;
};
