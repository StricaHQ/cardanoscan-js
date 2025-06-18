import { AxiosInstance } from "axios";
import * as reqTypes from "../types/reqTypes";
import * as resTypes from "../types/resTypes";

export async function getStakeKeyDetails(
  instance: AxiosInstance,
  params: reqTypes.GetStakeKeyDetailsParams
): Promise<resTypes.StakeKeyDetails | undefined> {
  const response = await instance.get<resTypes.StakeKeyDetails | undefined>("/rewardAccount", {
    params,
  });
  return response.data;
}

export async function getAddressesByStakeKey(
  instance: AxiosInstance,
  params: reqTypes.GetAddressesByStakeKey
): Promise<resTypes.AddressesByStakeKey> {
  const response = await instance.get<resTypes.AddressesByStakeKey>("/rewardAccount/addresses", {
    params,
  });
  return response.data;
}
