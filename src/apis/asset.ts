import { AxiosInstance } from "axios";
import { Token, PaginatedTokens } from "../types/resTypes";
import {
  GetAssetByAddressParams,
  GetAssetDetailsParams,
  GetAssetsByPolicyIdParams,
} from "../types/reqTypes";

export async function getAssetDetails(
  instance: AxiosInstance,
  params: GetAssetDetailsParams
): Promise<Token> {
  const response = await instance.get<Token>("/asset", { params });
  return response.data;
}

export async function getAssetsByPolicyId(
  instance: AxiosInstance,
  params: GetAssetsByPolicyIdParams
): Promise<PaginatedTokens> {
  const response = await instance.get<PaginatedTokens>("/asset/list/byPolicyId", { params });
  return response.data;
}

export async function getAssetsByAddress(
  instance: AxiosInstance,
  params: GetAssetByAddressParams
): Promise<PaginatedTokens> {
  const response = await instance.get<PaginatedTokens>("/asset/list/byAddress", { params });
  return response.data;
}
