import * as BabbageTypes from "@stricahq/cardano-codec/dist/types/babbageTypes";
import { Decimal128 } from "mongodb";
import { GenDelegationCert, MetaDatum, PoolRelay } from "./core";

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
  value: Decimal128 | string;
};

export type PoolRetirementCert = {
  poolKeyHash: string;
  epoch: number;
};

export type PoolRegistrationCert = {
  operator: string;
  vrfKeyHash: string;
  pledge: Decimal128 | string;
  cost: Decimal128 | string;
  margin: Array<number>;
  rewardAccount: string;
  poolOwners: Array<string>;
  relays: Array<PoolRelay>;
  poolMetadata: {
    url: string;
    metadataHash: string;
  } | null;
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
