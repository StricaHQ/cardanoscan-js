import { AxiosInstance } from "axios";
import { Address } from "../types/resTypes";
import { GetAddressBalanceParams } from "../types/reqTypes";

// eslint-disable-next-line import/prefer-default-export
export async function getAddressBalance(
  instance: AxiosInstance,
  params: GetAddressBalanceParams
): Promise<Address> {
  const response = await instance.get<Address>("/address/balance", { params });
  return response.data;
}
