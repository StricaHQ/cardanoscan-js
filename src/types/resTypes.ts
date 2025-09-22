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
  protocolVersion: string | undefined;
  vrfVKey: string | undefined;
  nonceVrf:
    | {
        natural: string;
        cert: string;
      }
    | undefined;
  leaderVrf:
    | {
        natural: string;
        cert: string;
      }
    | undefined;
  vrfResult: Array<string> | undefined;
  operationalCert:
    | {
        hotVKey: string;
        sequenceNumber: number;
        kesPeriod: number;
        sigma: string;
      }
    | undefined;
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
  vrfKeyHash: string | undefined;
  status: boolean;
  name: string | null | undefined;
  ticker: string | null | undefined;
  website: string | null | undefined;
  description: string | null | undefined;
  margin: string | undefined;
  cost: string | undefined;
  declaredPledge: string | undefined;
  rewardAccount: string | undefined;
  owners: Array<string> | undefined;
  registeredOn: Date | undefined;
  metadata:
    | {
        url: string | null;
        metadataHash: string | null;
      }
    | undefined;
  relays:
    | Array<{
        port: number | null | undefined;
        ipv4: string | null | undefined;
        ipv6: string | null | undefined;
        dnsName: string | undefined;
        srvName: string | undefined;
      }>
    | undefined;
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

export type AddressTokenResponse = {
  policyId: string;
  assetName: string;
  fingerprint: string;
  assetId: string;
  balance: string;
};

export type PaginatedAddressTokens = {
  tokens: Array<AddressTokenResponse>;
  count: number;
  pageNo: number;
  limit: number;
};

export type StakeKeyDetails = {
  poolId: string | null | undefined;
  rewardAddress: string;
  stake: string | undefined;
  status: boolean | undefined;
  rewardsAvailable: string | undefined;
  rewardsWithdrawn: string | undefined;
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
  tokens:
    | Array<{
        policyId: string;
        assetName: string;
        fingerprint: string;
        assetId: string;
        value: string;
      }>
    | undefined;
  datum:
    | {
        hash: string;
        value: string;
      }
    | undefined;
  scriptRef: Types.ScriptRef | undefined;
};

export type TransactionOutput = {
  value: string;
  address: string;
  tokens:
    | Array<{
        policyId: string;
        assetName: string;
        fingerprint: string;
        assetId: string;
        value: string;
      }>
    | undefined;
  datum:
    | {
        hash: string;
        value: string;
      }
    | undefined;
  scriptRef: Types.ScriptRef | undefined;
};

export type TransactionCertificates = {
  stakeRegistrations:
    | Array<{
        index: number;
        rewardAddress: string;
      }>
    | undefined;
  stakeDeRegistrations:
    | Array<{
        index: number;
        rewardAddress: string;
      }>
    | undefined;
  stakeDelegations:
    | Array<{
        index: number;
        rewardAddress: string;
        poolKeyHash: string;
      }>
    | undefined;
  poolRegistrations: Array<Types.PoolRegistrationCertT> | undefined;
  poolDeRegistrations: Array<Types.PoolRetirementCertT> | undefined;
  instantaneousRewards:
    | Array<{
        index: number;
        pot: number;
        rewards: Array<{
          rewardAddress: string;
          amount: string;
        }>;
        value: string;
      }>
    | undefined;
  genesisDelegations: Array<Types.GenDelegationCertT> | undefined;
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
  collateral: Array<TransactionInput> | undefined;
  outputs: Array<TransactionOutput>;
  collateralOutput: TransactionOutput | undefined;
  totalCollateral: string | undefined;
  referenceInputs: Array<Types.ReferenceInput> | undefined;
  certificate: TransactionCertificates | undefined;
  withdrawals:
    | Array<{
        rewardAddress: string;
        amount: string;
      }>
    | undefined;
  metadata: Types.Metadata | undefined;
  update:
    | {
        proposals: Array<{
          genesisHash: string;
          parameter: Types.ProtocolParameter;
        }>;
        epoch: number;
      }
    | undefined;
  mint: Array<Types.Token> | undefined;
  scriptDataHash: string | undefined;
  redeemers: Array<Types.Redeemer> | undefined;
  status: boolean;
  ttl:
    | {
        timestamp: Date;
        slot: number;
      }
    | undefined;
};

export type PaginatedTransactions = {
  pageNo: number;
  limit: number;
  transactions: Array<Transaction>;
  count: number;
};

export type NetworkProtocol = {
  minFeeA: string;
  minFeeB: string;
  stakeKeyDeposit: string;
  lovelacePerUtxoWord: string;
  collateralPercent: string;
  priceSteps: string;
  priceMem: string;
  poolDeposit: string;
  maxTokenValue: string;
  networkMagic: number;
  maxTxSize: string;
  maxValueSize: string;
  utxoCostPerByte: string;
  languageView: {
    PlutusScriptV1: Types.LanguageView;
  };
};

export type AssetHoldersByPolicy = {
  address: string;
  policyId: string;
  assetName: string;
  fingerprint: string;
  assetId: string;
  balance: string;
};

export type PaginatedAssetHoldersByPolicy = {
  holders: Array<AssetHoldersByPolicy>;
  count: number;
  pageNo: number;
  limit: number;
};

export type AssetHoldersByAssetId = {
  balance: string;
  address: string;
};

export type PaginatedAssetHoldersByAssetId = {
  holders: Array<AssetHoldersByAssetId>;
  count: number;
  pageNo: number;
  limit: number;
};

export type AssetMetadata = {
  assetId: string;
  policyId: string;
  assetName: string;
  decimals: number;
  name: string | undefined;
  description: string | undefined;
  image:
    | {
        src: string;
        type: string;
      }
    | undefined;
  ticker: string | undefined;
  url: string | undefined;
  logo:
    | {
        src: string;
        type: string;
      }
    | undefined;
};

export type PaginatedAssetsMetadata = {
  metadataList: Array<AssetMetadata>;
};

export type TransactionSummary = {
  hash: string;
  summary: Array<{
    wallet: string;
    amount: string;
    sentTokens: Array<{
      policyId: string;
      assetName: string;
      fingerprint: string;
      assetId: string;
      value: string;
    }>;
    receivedTokens: Array<{
      policyId: string;
      assetName: string;
      fingerprint: string;
      assetId: string;
      value: string;
    }>;
  }>;
};

export type Utxo = {
  address: string;
  amount: string;
  assets:
    | Array<{
        policyId: string;
        assetName: string;
        fingerprint: string;
        assetId: string;
        value: string;
      }>
    | undefined;
  data: { hash: string; value: string | undefined } | undefined;
  txId: string;
  index: number;
};

export type PaginatedUtxos = {
  utxos: Array<Utxo>;
  count: number;
  pageNo: number;
  limit: number;
};

export type ccHot = {
  hotHex: string;
  pub: string | undefined;
  votes: number | undefined;
};

export type ccMember = {
  hotHex: string | undefined;
  coldHex: string;
  pub: string | undefined;
  anchor: Types.Anchor | null | undefined;
};

export type Committee = {
  status: Types.CommitteeStatus | undefined;
  updated: Date | undefined;
  threshold: number | undefined;
  constitution:
    | {
        script: string | undefined;
        scriptHash: string | null | undefined;
        anchor: Types.Anchor;
      }
    | undefined;
};

export type CommitteeMember = {
  hotHex: string | undefined;
  coldHex: string;
  pub: string | undefined;
  expire: number | undefined;
  status: Types.CCMemberStatus | undefined;
  anchor: Types.Anchor | null | undefined;
};

export type PaginatedCommitteeMembers = {
  members: Array<CommitteeMember>;
  pageNo: number;
  limit: number;
  count: number;
};

export type DRep = {
  dRepId: string;
  pub: string | undefined;
  deposit: string | undefined;
  registered: Date | undefined;
  votes: number | undefined;
  anchor: Types.Anchor | null | undefined;
  meta: {
    hash: string;
    givenName: string | undefined;
    image: string | undefined;
    imageObject: string | undefined;
    objectives: string | undefined;
    motivations: string | undefined;
    qualifications: string | undefined;
    paymentAddress: string | undefined;
    references:
      | Array<{
          type: string | undefined;
          label: string | undefined;
          uri: string | undefined;
        }>
      | undefined;
  } | null;
};

export type PaginatedDReps = {
  dReps: Array<DRep>;
  count: number;
  pageNo: number;
  limit: number;
};

export type CostMdls = {
  plutusV1: Array<number> | undefined;
  plutusV2: Array<number> | undefined;
  plutusV3: Array<number> | undefined;
};

export type ProtocolParamUpdate = {
  minFeeA: string | undefined;
  minFeeB: string | undefined;
  maxBlockBodySize: number | undefined;
  maxTransactionSize: number | undefined;
  maxBlockHeaderSize: number | undefined;
  stakeKeyDeposit: string | undefined;
  poolDeposit: string | undefined;
  poolRetireMaxEpoch: number | undefined;
  n: number | undefined;
  pledgeInfluence: number | undefined;
  expansionRate: number | undefined;
  treasuryGrowthRate: number | undefined;
  minPoolCost: string | undefined;
  adaPerUtxoByte: string | undefined;
  costMdls: CostMdls | undefined;
  exUnitPrices:
    | {
        mem: number;
        steps: number;
      }
    | undefined;
  maxTxExUnits:
    | {
        mem: number;
        steps: number;
      }
    | undefined;
  maxBlockExUnits:
    | {
        mem: number;
        steps: number;
      }
    | undefined;
  maxValueSize: string | undefined;
  collateralPercent: number | undefined;
  maxCollateralInputs: number | undefined;
  poolVotingThreshold:
    | {
        motionNoConfidence: number;
        committeeNormal: number;
        committeeNoConfidence: number;
        hfInitiation: number;
        securityParamVoting: number;
      }
    | undefined;
  dRepVotingThreshold:
    | {
        motionNoConfidence: number;
        committeeNormal: number;
        committeeNoConfidence: number;
        updateConstitution: number;
        hfInitiation: number;
        networkParamVoting: number;
        economicParamVoting: number;
        technicalParamVoting: number;
        govParamVoting: number;
        treasuryWithdrawal: number;
      }
    | undefined;
  minCommitteeSize: number | undefined;
  committeeTermLimit: number | undefined;
  govActionValidity: number | undefined;
  govActionDeposit: number | undefined;
  dRepDeposit: number | undefined;
  dRepInactivity: number | undefined;
  refScriptCostByte: number | undefined;
  protocolVersion: [number, number] | undefined;
};

export type ParameterChangeAction = {
  prevActionId: string | null;
  protocolParamUpdate: ProtocolParamUpdate;
  policyHash: string | null;
};

export type HardForkInitAction = {
  prevActionId: string | null;
  protocolVersion: [number, number];
};

export type Withdrawal = {
  stakeHex: string;
  amount: string;
};

export type TreasuryWithdrawalsAction = {
  withdrawals: Array<Withdrawal>;
  policyHash: string | null;
};

export type NoConfidenceAction = {
  prevActionId: string | null;
};

export type UpdateCommitteeAction = {
  prevActionId: string | null;
  removeColdHex: Array<string>;
  addColdHex: Array<{
    hex: string;
    epoch: number;
  }>;
  threshold: number;
};

export type NewConstitutionAction = {
  prevActionId: string | null;
  constitution: {
    anchor: Types.Anchor;
    scriptHash: string | null;
  };
};

export type InfoAction = {
  info: true;
};

export type GovAction = {
  type: Types.GovActionType;
  action:
    | ParameterChangeAction
    | HardForkInitAction
    | TreasuryWithdrawalsAction
    | NoConfidenceAction
    | UpdateCommitteeAction
    | NewConstitutionAction
    | InfoAction;
};

export type GovActionEnactedStatus = {
  dReps: {
    yes: {
      count: number;
      stake: string | undefined;
    };
    no: {
      count: number;
      stake: string | undefined;
    };
    abstain: {
      count: number;
      stake: string | undefined;
    };
  };
  spos: {
    yes: {
      count: number;
      stake: string | undefined;
    };
    no: {
      count: number;
      stake: string | undefined;
    };
    abstain: {
      count: number;
      stake: string | undefined;
    };
  };
  committeeMembers: {
    yes: {
      count: number;
    };
    no: {
      count: number;
    };
    abstain: {
      count: number;
    };
  };
};

export type GovActionResponse = {
  actionId: string;
  txId: string;
  timestamp: Date;
  epoch: number;
  blockHeight: number;
  action: GovAction;
  deposit: string;
  rewardAccount: string;
  anchor: Types.Anchor;
  votes: GovActionEnactedStatus | undefined;
  meta: {
    hash: string;
    title: string | undefined;
    abstract: string | undefined;
    motivation: string | undefined;
    rationale: string | undefined;
    references:
      | Array<{
          type: string | undefined;
          label: string | undefined;
          uri: string | undefined;
        }>
      | undefined;
  } | null;
};

export type Vote = {
  actionId: string;
  txId: string;
  timestamp: Date;
  epoch: number;
  blockHeight: number;
  vote: Types.VoteType;
  voter: string;
  anchor: Types.Anchor | null;
  meta:
    | {
        hash: string;
        comment: string | undefined;
        references:
          | Array<{
              type: string | undefined;
              label: string | undefined;
              uri: string | undefined;
            }>
          | undefined;
      }
    | undefined;
};

export type PaginatedVotes = {
  votes: Array<Vote>;
  count: number;
  pageNo: number;
  limit: number;
};
