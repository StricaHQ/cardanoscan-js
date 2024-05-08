import axios, { AxiosInstance } from "axios";

import {
  GetAddressBalanceParams,
  GetAssetDetailsParams,
  GetAssetsByPolicyIdParams,
  GetAssetByAddressParams,
  GetBlockDetailsParams,
} from "./types/reqTypes";

import { Address, Block, Token, PaginatedTokens, NetworkState } from "./types/resTypes";

import { getAddressBalance } from "./apis/address";
import { getAssetDetails, getAssetsByPolicyId, getAssetsByAddress } from "./apis/asset";
import { getBlockDetails, getLatestBlockDetails } from "./apis/block";
import { getNetworkDetails } from "./apis/network";

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
  getAddressBalance(params: GetAddressBalanceParams): Promise<Address> {
    return getAddressBalance(this.instance, params);
  }

  /* Assets */
  getAssetDetails(params: GetAssetDetailsParams): Promise<Token> {
    return getAssetDetails(this.instance, params);
  }

  getAssetsByPolicyId(params: GetAssetsByPolicyIdParams): Promise<PaginatedTokens> {
    return getAssetsByPolicyId(this.instance, params);
  }

  getAssetsByAddress(params: GetAssetByAddressParams): Promise<PaginatedTokens> {
    return getAssetsByAddress(this.instance, params);
  }

  /* Blocks */
  getBlockDetails(params: GetBlockDetailsParams): Promise<Block> {
    return getBlockDetails(this.instance, params);
  }

  getLatestBlockDetails(): Promise<Block> {
    return getLatestBlockDetails(this.instance);
  }

  /* Network */
  getNetworkDetails(): Promise<NetworkState> {
    return getNetworkDetails(this.instance);
  }
}
