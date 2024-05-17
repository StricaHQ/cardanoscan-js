import { AxiosInstance } from "axios";
import * as reqTypes from "../types/reqTypes";
import * as resTypes from "../types/resTypes";

export async function getBlockDetails(
  instance: AxiosInstance,
  params: reqTypes.GetBlockDetailsParams
): Promise<resTypes.Block> {
  const response = await instance.get<resTypes.Block>("/block", { params });
  return response.data;
}

export async function getLatestBlockDetails(instance: AxiosInstance): Promise<resTypes.Block> {
  const response = await instance.get<resTypes.Block>("/block/latest");
  return response.data;
}
