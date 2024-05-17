import { AxiosInstance } from "axios";
import * as reqTypes from "../types/reqTypes";
import * as resTypes from "../types/resTypes";

export async function getPoolDetails(
  instance: AxiosInstance,
  params: reqTypes.GetPoolDetails
): Promise<resTypes.Pool> {
  const response = await instance.get<resTypes.Pool>("/pool", { params });
  return response.data;
}

export async function getPoolStats(
  instance: AxiosInstance,
  params: reqTypes.GetPoolStatsParams
): Promise<resTypes.PoolStats> {
  const response = await instance.get<resTypes.PoolStats>("/pool/stats", { params });
  return response.data;
}

export async function getPools(
  instance: AxiosInstance,
  params: reqTypes.GetPoolListParams
): Promise<resTypes.PaginatedPools> {
  const response = await instance.get<resTypes.PaginatedPools>("/pool/list", { params });
  return response.data;
}

export async function getExpiringPools(
  instance: AxiosInstance,
  params: reqTypes.GetPoolListExpireParams
): Promise<resTypes.PaginatedExpiringPools> {
  const response = await instance.get<resTypes.PaginatedExpiringPools>("/pool/list/expiring", {
    params,
  });
  return response.data;
}

export async function getExpiredPools(
  instance: AxiosInstance,
  params: reqTypes.GetExpiredPoolsParams
): Promise<resTypes.PaginatedExpiredPools> {
  const response = await instance.get<resTypes.PaginatedExpiredPools>("/pool/list/expired", {
    params,
  });
  return response.data;
}
