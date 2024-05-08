import { AxiosInstance } from "axios";
import { NetworkState } from "../types/resTypes";

// eslint-disable-next-line import/prefer-default-export
export async function getNetworkDetails(instance: AxiosInstance): Promise<NetworkState> {
  const response = await instance.get<NetworkState>("/network/state");
  return response.data;
}
