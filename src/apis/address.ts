import { AxiosInstance } from "axios";
import * as reqTypes from "../types/reqTypes";
import * as resTypes from "../types/resTypes";

// eslint-disable-next-line import/prefer-default-export
export async function getAddressBalance(
  instance: AxiosInstance,
  params: reqTypes.GetAddressBalanceParams
): Promise<resTypes.Address> {
  const response = await instance.get<resTypes.Address>("/address/balance", { params });
  return response.data;
}
