import axios, { AxiosInstance } from "axios";

import * as reqTypes from "./types/reqTypes";
import * as resTypes from "./types/resTypes";

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

  /* Blocks */
  getBlockDetails(params: reqTypes.GetBlockDetailsParams): Promise<resTypes.Block> {
    return getBlockDetails(this.instance, params);
  }

  getLatestBlockDetails(): Promise<resTypes.Block> {
    return getLatestBlockDetails(this.instance);
  }

  /* Network */
  getNetworkDetails(): Promise<resTypes.NetworkState> {
    return getNetworkDetails(this.instance);
  }
}
