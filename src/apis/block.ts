import { AxiosInstance } from "axios";
import { Block } from "../types/resTypes";
import { GetBlockDetailsParams } from "../types/reqTypes";

export async function getBlockDetails(
  instance: AxiosInstance,
  params: GetBlockDetailsParams
): Promise<Block> {
  const response = await instance.get<Block>("/block", { params });
  return response.data;
}

export async function getLatestBlockDetails(instance: AxiosInstance): Promise<Block> {
  const response = await instance.get<Block>("/block/latest");
  return response.data;
}
