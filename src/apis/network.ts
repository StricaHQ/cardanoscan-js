import { AxiosInstance } from "axios";
import * as resTypes from "../types/resTypes";

export async function getNetworkDetails(instance: AxiosInstance): Promise<resTypes.NetworkState> {
  const response = await instance.get<resTypes.NetworkState>("/network/state");
  return response.data;
}

export async function getNetworkProtocolDetails(
  instance: AxiosInstance
): Promise<resTypes.NetworkProtocol> {
  const response = await instance.get<resTypes.NetworkProtocol>("/network/protocolParams");
  return response.data;
}
