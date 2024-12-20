import axios, { AxiosInstance } from "axios";

import * as reqTypes from "./types/reqTypes";
import * as resTypes from "./types/resTypes";

import { getAddressBalance } from "./apis/address";
import {
  getAssetDetails,
  getAssetsByPolicyId,
  getAssetsByAddress,
  getAssetHoldersByPolicyId,
  getAssetsMetadata,
  getAssetHoldersByAssetId,
} from "./apis/asset";
import { getBlockDetails, getLatestBlockDetails } from "./apis/block";
import {
  getPoolDetails,
  getPoolStats,
  getPools,
  getExpiringPools,
  getExpiredPools,
} from "./apis/pools";
import { getStakeKeyDetails, getAddressesByStakeKey } from "./apis/rewardAccount";
import {
  getTransactionDetails,
  getTransactionListByAddress,
  getTransactionSummary,
  postSubmitTransaction,
} from "./apis/transaction";
import { getNetworkDetails, getNetworkProtocolDetails } from "./apis/network";
import { getUTXOList } from "./apis/utxo";
import {
  getCCHotDetails,
  getCCMemberDetails,
  getCommitteeInformation,
  getCommitteeMembers,
  getDRepInformation,
  getDReps,
  getGovernanceAction,
} from "./apis/governance";
import { getVotesByAction, getVotesByVoter } from "./apis/votes";

// eslint-disable-next-line import/prefer-default-export
export class CardanoscanAPI {
  instance: AxiosInstance;

  constructor(apiKey: string) {
    this.instance = axios.create({
      baseURL: "https://api.cardanoscan.io/api/v1",
      headers: {
        Accept: "application/json",
        apiKey: apiKey,
      },
    });
  }

  /* Address */
  getAddressBalance(params: reqTypes.GetAddressBalanceParams): Promise<resTypes.Address> {
    return getAddressBalance(this.instance, params);
  }

  /* Assets */
  getAssetDetails(params: reqTypes.GetAssetDetailsParams): Promise<resTypes.Token> {
    return getAssetDetails(this.instance, params);
  }

  getAssetsByPolicyId(
    params: reqTypes.GetAssetsByPolicyIdParams
  ): Promise<resTypes.PaginatedTokens> {
    return getAssetsByPolicyId(this.instance, params);
  }

  getAssetsByAddress(params: reqTypes.GetAssetByAddressParams): Promise<resTypes.PaginatedTokens> {
    return getAssetsByAddress(this.instance, params);
  }

  /**
   * Only available in PRO plan
   * @param params
   * @returns
   */
  getAssetHoldersByPolicyId(
    params: reqTypes.GetAssetHoldersByPolicyIdParams
  ): Promise<resTypes.PaginatedAssetHoldersByPolicy> {
    return getAssetHoldersByPolicyId(this.instance, params);
  }

  /**
   * Only available in PRO plan
   * @param params
   * @returns
   */
  getAssetHoldersByAssetId(
    params: reqTypes.GetAssetHoldersByAssetIdParams
  ): Promise<resTypes.PaginatedAssetHoldersByAssetId> {
    return getAssetHoldersByAssetId(this.instance, params);
  }

  /**
   * Only available in PRO plan
   * @param params
   * @returns
   */
  getAssetsMetadata(
    params: reqTypes.GetAssetsMetadataParams
  ): Promise<resTypes.PaginatedAssetsMetadata> {
    return getAssetsMetadata(this.instance, params);
  }

  /* Blocks */
  getBlockDetails(params: reqTypes.GetBlockDetailsParams): Promise<resTypes.Block> {
    return getBlockDetails(this.instance, params);
  }

  getLatestBlockDetails(): Promise<resTypes.Block> {
    return getLatestBlockDetails(this.instance);
  }

  /* Governance */
  getCCHotDetails(params: reqTypes.GetCCHotDetailsParams): Promise<resTypes.ccHot> {
    return getCCHotDetails(this.instance, params);
  }

  getCCMemberDetails(params: reqTypes.GetCCMemberDetailsParams): Promise<resTypes.ccMember> {
    return getCCMemberDetails(this.instance, params);
  }

  getCommitteeInformation(): Promise<resTypes.Committee> {
    return getCommitteeInformation(this.instance);
  }

  getCommitteeMembers(
    params: reqTypes.GetCommitteeMembersParams
  ): Promise<resTypes.PaginatedCommitteeMembers> {
    return getCommitteeMembers(this.instance, params);
  }

  getDRepInformation(params: reqTypes.GetDRepInformationParams): Promise<resTypes.DRep> {
    return getDRepInformation(this.instance, params);
  }

  getDReps(params: reqTypes.GetDRepListParams): Promise<resTypes.PaginatedDReps> {
    return getDReps(this.instance, params);
  }

  getGovernanceAction(params: reqTypes.GetGovActionParams): Promise<resTypes.GovActionResponse> {
    return getGovernanceAction(this.instance, params);
  }

  /* Network */
  getNetworkDetails(): Promise<resTypes.NetworkState> {
    return getNetworkDetails(this.instance);
  }

  getNetworkProtocolDetails(): Promise<resTypes.NetworkProtocol> {
    return getNetworkProtocolDetails(this.instance);
  }

  /* Pools */
  getPoolDetails(params: reqTypes.GetPoolDetails): Promise<resTypes.Pool> {
    return getPoolDetails(this.instance, params);
  }

  getPoolStats(params: reqTypes.GetPoolStatsParams): Promise<resTypes.PoolStats> {
    return getPoolStats(this.instance, params);
  }

  getPools(params: reqTypes.GetPoolListParams): Promise<resTypes.PaginatedPools> {
    return getPools(this.instance, params);
  }

  getExpiringPools(
    params: reqTypes.GetPoolListExpireParams
  ): Promise<resTypes.PaginatedExpiringPools> {
    return getExpiringPools(this.instance, params);
  }

  getExpiredPools(params: reqTypes.GetExpiredPoolsParams): Promise<resTypes.PaginatedExpiredPools> {
    return getExpiredPools(this.instance, params);
  }

  /* Reward Account */
  getStakeKeyDetails(params: reqTypes.GetStakeKeyDetailsParams): Promise<resTypes.StakeKeyDetails> {
    return getStakeKeyDetails(this.instance, params);
  }

  getAddressesByStakeKey(
    params: reqTypes.GetAddressesByStakeKey
  ): Promise<resTypes.AddressesByStakeKey> {
    return getAddressesByStakeKey(this.instance, params);
  }

  /* Transaction */
  getTransactionDetails(
    params: reqTypes.GetTransactionDetailsParams
  ): Promise<resTypes.Transaction> {
    return getTransactionDetails(this.instance, params);
  }

  getTransactionListByAddress(
    params: reqTypes.GetTransactionListByAddressParams
  ): Promise<resTypes.PaginatedTransactions> {
    return getTransactionListByAddress(this.instance, params);
  }

  /**
   * Only available in PRO plan
   * @param params
   * @returns
   */
  postSubmitTransaction(params: reqTypes.postSubmitTransactionParams): Promise<void> {
    return postSubmitTransaction(this.instance, params);
  }

  /**
   * Only available in PRO plan
   * @param params
   * @returns
   */
  getTransactionSummary(
    params: reqTypes.GetTransactionSummaryParams
  ): Promise<resTypes.TransactionSummary> {
    return getTransactionSummary(this.instance, params);
  }

  /* UTXO */

  /**
   * Only available in PRO plan
   * @param params
   * @returns
   */
  getUTXOList(params: reqTypes.GetUtxoListParams): Promise<resTypes.PaginatedUtxos> {
    return getUTXOList(this.instance, params);
  }

  /* Votes */

  /**
   * Only available in PRO plan
   * @param params
   * @returns
   */
  getVotesByVoter(params: reqTypes.GetVotesByVoterParams): Promise<resTypes.PaginatedVotes> {
    return getVotesByVoter(this.instance, params);
  }

  /**
   * Only available in PRO plan
   * @param params
   * @returns
   */
  getVotesByAction(params: reqTypes.GetVotesByActionParams): Promise<resTypes.PaginatedVotes> {
    return getVotesByAction(this.instance, params);
  }
}
