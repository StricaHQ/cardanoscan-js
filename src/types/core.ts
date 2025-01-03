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

export type LanguageView = {
  [key: string]: number;
};

export type Anchor = {
  url: string;
  hash: string;
};

export enum CommitteeStatus {
  CONFIDENCE = 1,
  NO_CONFIDENCE = 0,
}

export enum CCMemberStatus {
  ACTIVE = 0,
  REMOVED = 1,
  RESIGNED = 2,
  INACTIVE = 3,
}

export enum GovActionType {
  PARAM_CHANGE_ACTION = 0,
  HF_INIT_ACTION = 1,
  TREASURY_WITHDRAW_ACTION = 2,
  NO_CONFIDENCE_ACTION = 3,
  UPDATE_COMMITTEE_ACTION = 4,
  NEW_CONSTITUTION_ACTION = 5,
  INFO_ACTION = 6,
}

export enum VoteType {
  NO = 0,
  YES = 1,
  ABSTAIN = 2,
}
