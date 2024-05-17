import { AxiosInstance } from "axios";
import * as resTypes from "../types/resTypes";

// eslint-disable-next-line import/prefer-default-export
export async function getNetworkDetails(instance: AxiosInstance): Promise<resTypes.NetworkState> {
  const response = await instance.get<resTypes.NetworkState>("/network/state");
  return response.data;
}
