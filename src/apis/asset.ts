import { AxiosInstance } from "axios";
import * as reqTypes from "../types/reqTypes";
import * as resTypes from "../types/resTypes";

export async function getAssetDetails(
  instance: AxiosInstance,
  params: reqTypes.GetAssetDetailsParams
): Promise<resTypes.Token> {
  const response = await instance.get<resTypes.Token>("/asset", { params });
  return response.data;
}

export async function getAssetsByPolicyId(
  instance: AxiosInstance,
  params: reqTypes.GetAssetsByPolicyIdParams
): Promise<resTypes.PaginatedTokens> {
  const response = await instance.get<resTypes.PaginatedTokens>("/asset/list/byPolicyId", {
    params,
  });
  return response.data;
}

export async function getAssetsByAddress(
  instance: AxiosInstance,
  params: reqTypes.GetAssetByAddressParams
): Promise<resTypes.PaginatedTokens> {
  const response = await instance.get<resTypes.PaginatedTokens>("/asset/list/byAddress", {
    params,
  });
  return response.data;
}

export async function getAssetHoldersByPolicyId(
  instance: AxiosInstance,
  params: reqTypes.GetAssetHoldersByPolicyIdParams
): Promise<resTypes.PaginatedAssetHoldersByPolicy> {
  const response = await instance.get<resTypes.PaginatedAssetHoldersByPolicy>(
    "/asset/holders/byPolicyId",
    {
      params,
    }
  );
  return response.data;
}

export async function getAssetHoldersByAssetId(
  instance: AxiosInstance,
  params: reqTypes.GetAssetHoldersByAssetIdParams
): Promise<resTypes.PaginatedAssetHoldersByAssetId> {
  const response = await instance.get<resTypes.PaginatedAssetHoldersByAssetId>(
    "/asset/holders/byAssetId",
    {
      params,
    }
  );
  return response.data;
}

export async function getAssetsMetadata(
  instance: AxiosInstance,
  params: reqTypes.GetAssetsMetadataParams
): Promise<resTypes.PaginatedAssetsMetadata> {
  const response = await instance.get<resTypes.PaginatedAssetsMetadata>("/asset/metadata", {
    params,
  });
  return response.data;
}
