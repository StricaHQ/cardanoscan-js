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
  "sha2_256-memory-arguments": number;
  "equalsString-cpu-arguments-constant": number;
  "cekDelayCost-exBudgetMemory": number;
  "lessThanEqualsByteString-cpu-arguments-intercept": number;
  "divideInteger-memory-arguments-minimum": number;
  "appendByteString-cpu-arguments-slope": number;
  "blake2b-cpu-arguments-slope": number;
  "iData-cpu-arguments": number;
  "encodeUtf8-cpu-arguments-slope": number;
  "unBData-cpu-arguments": number;
  "multiplyInteger-cpu-arguments-intercept": number;
  "cekConstCost-exBudgetMemory": number;
  "nullList-cpu-arguments": number;
  "equalsString-cpu-arguments-intercept": number;
  "trace-cpu-arguments": number;
  "mkNilData-memory-arguments": number;
  "lengthOfByteString-cpu-arguments": number;
  "cekBuiltinCost-exBudgetCPU": number;
  "bData-cpu-arguments": number;
  "subtractInteger-cpu-arguments-slope": number;
  "unIData-cpu-arguments": number;
  "consByteString-memory-arguments-intercept": number;
  "divideInteger-memory-arguments-slope": number;
  "divideInteger-cpu-arguments-model-arguments-slope": number;
  "listData-cpu-arguments": number;
  "headList-cpu-arguments": number;
  "chooseData-memory-arguments": number;
  "equalsInteger-cpu-arguments-intercept": number;
  "sha3_256-cpu-arguments-slope": number;
  "sliceByteString-cpu-arguments-slope": number;
  "unMapData-cpu-arguments": number;
  "lessThanInteger-cpu-arguments-intercept": number;
  "mkCons-cpu-arguments": number;
  "appendString-memory-arguments-intercept": number;
  "modInteger-cpu-arguments-model-arguments-slope": number;
  "ifThenElse-cpu-arguments": number;
  "mkNilPairData-cpu-arguments": number;
  "lessThanEqualsInteger-cpu-arguments-intercept": number;
  "addInteger-memory-arguments-slope": number;
  "chooseList-memory-arguments": number;
  "constrData-memory-arguments": number;
  "decodeUtf8-cpu-arguments-intercept": number;
  "equalsData-memory-arguments": number;
  "subtractInteger-memory-arguments-slope": number;
  "appendByteString-memory-arguments-intercept": number;
  "lengthOfByteString-memory-arguments": number;
  "headList-memory-arguments": number;
  "listData-memory-arguments": number;
  "consByteString-cpu-arguments-intercept": number;
  "unIData-memory-arguments": number;
  "remainderInteger-memory-arguments-minimum": number;
  "bData-memory-arguments": number;
  "lessThanByteString-cpu-arguments-slope": number;
  "encodeUtf8-memory-arguments-intercept": number;
  "cekStartupCost-exBudgetCPU": number;
  "multiplyInteger-memory-arguments-intercept": number;
  "unListData-memory-arguments": number;
  "remainderInteger-cpu-arguments-model-arguments-slope": number;
  "cekVarCost-exBudgetCPU": number;
  "remainderInteger-memory-arguments-slope": number;
  "cekForceCost-exBudgetCPU": number;
  "sha2_256-cpu-arguments-slope": number;
  "equalsInteger-memory-arguments": number;
  "indexByteString-memory-arguments": number;
  "addInteger-memory-arguments-intercept": number;
  "chooseUnit-cpu-arguments": number;
  "sndPair-cpu-arguments": number;
  "cekLamCost-exBudgetCPU": number;
  "fstPair-cpu-arguments": number;
  "quotientInteger-memory-arguments-minimum": number;
  "decodeUtf8-cpu-arguments-slope": number;
  "lessThanInteger-memory-arguments": number;
  "lessThanEqualsInteger-cpu-arguments-slope": number;
  "fstPair-memory-arguments": number;
  "modInteger-memory-arguments-intercept": number;
  "unConstrData-cpu-arguments": number;
  "lessThanEqualsInteger-memory-arguments": number;
  "chooseUnit-memory-arguments": number;
  "sndPair-memory-arguments": number;
  "addInteger-cpu-arguments-intercept": number;
  "decodeUtf8-memory-arguments-slope": number;
  "equalsData-cpu-arguments-intercept": number;
  "mapData-cpu-arguments": number;
  "mkPairData-cpu-arguments": number;
  "quotientInteger-cpu-arguments-constant": number;
  "consByteString-memory-arguments-slope": number;
  "cekVarCost-exBudgetMemory": number;
  "indexByteString-cpu-arguments": number;
  "unListData-cpu-arguments": number;
  "equalsInteger-cpu-arguments-slope": number;
  "cekStartupCost-exBudgetMemory": number;
  "subtractInteger-cpu-arguments-intercept": number;
  "divideInteger-cpu-arguments-model-arguments-intercept": number;
  "divideInteger-memory-arguments-intercept": number;
  "cekForceCost-exBudgetMemory": number;
  "blake2b-cpu-arguments-intercept": number;
  "remainderInteger-cpu-arguments-constant": number;
  "tailList-cpu-arguments": number;
  "encodeUtf8-cpu-arguments-intercept": number;
  "equalsString-cpu-arguments-slope": number;
  "lessThanByteString-memory-arguments": number;
  "multiplyInteger-cpu-arguments-slope": number;
  "appendByteString-cpu-arguments-intercept": number;
  "lessThanEqualsByteString-cpu-arguments-slope": number;
  "modInteger-memory-arguments-slope": number;
  "addInteger-cpu-arguments-slope": number;
  "equalsData-cpu-arguments-slop": number;
  "decodeUtf8-memory-arguments-intercep": number;
  "chooseList-cpu-arguments": number;
  "constrData-cpu-arguments": number;
  "equalsByteString-memory-arguments": number;
  "cekApplyCost-exBudgetCPU": number;
  "quotientInteger-memory-arguments-slope": number;
  "verifySignature-cpu-arguments-intercept": number;
  "unMapData-memory-arguments": number;
  "mkCons-memory-arguments": number;
  "sliceByteString-memory-arguments-slope": number;
  "sha3_256-memory-arguments": number;
  "ifThenElse-memory-arguments": number;
  "mkNilPairData-memory-arguments": number;
  "equalsByteString-cpu-arguments-slope": number;
  "appendString-cpu-arguments-intercept": number;
  "quotientInteger-cpu-arguments-model-arguments-slope": number;
  "cekApplyCost-exBudgetMemory": number;
  "equalsString-memory-arguments": number;
  "multiplyInteger-memory-arguments-slope": number;
  "cekBuiltinCost-exBudgetMemory": number;
  "remainderInteger-memory-arguments-intercept": number;
  "sha2_256-cpu-arguments-intercept": number;
  "remainderInteger-cpu-arguments-model-arguments-intercept": number;
  "lessThanEqualsByteString-memory-arguments": number;
  "tailList-memory-arguments": number;
  "mkNilData-cpu-arguments": number;
  "chooseData-cpu-arguments": number;
  "unBData-memory-arguments": number;
  "blake2b-memory-arguments": number;
  "iData-memory-arguments": number;
  "nullList-memory-arguments": number;
  "cekDelayCost-exBudgetCPU": number;
  "subtractInteger-memory-arguments-intercept": number;
  "lessThanByteString-cpu-arguments-intercept": number;
  "consByteString-cpu-arguments-slope": number;
  "appendByteString-memory-arguments-slope": number;
  "trace-memory-arguments": number;
  "divideInteger-cpu-arguments-constant": number;
  "cekConstCost-exBudgetCPU": number;
  "encodeUtf8-memory-arguments-slope": number;
  "quotientInteger-cpu-arguments-model-arguments-intercept": number;
  "mapData-memory-arguments": number;
  "appendString-cpu-arguments-slope": number;
  "modInteger-cpu-arguments-constant": number;
  "verifySignature-cpu-arguments-slope": number;
  "unConstrData-memory-arguments": number;
  "quotientInteger-memory-arguments-intercept": number;
  "equalsByteString-cpu-arguments-constant": number;
  "sliceByteString-memory-arguments-intercept": number;
  "mkPairData-memory-arguments": number;
  "equalsByteString-cpu-arguments-intercept": number;
  "appendString-memory-arguments-slope": number;
  "lessThanInteger-cpu-arguments-slope": number;
  "modInteger-cpu-arguments-model-arguments-intercept": number;
  "modInteger-memory-arguments-minimum": number;
  "sha3_256-cpu-arguments-intercept": number;
  "verifySignature-memory-arguments": number;
  "cekLamCost-exBudgetMemory": number;
  "sliceByteString-cpu-arguments-intercept": number;
};
