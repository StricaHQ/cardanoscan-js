import { AxiosInstance } from "axios";
import * as reqTypes from "../types/reqTypes";
import * as resTypes from "../types/resTypes";

export async function getTransactionDetails(
  instance: AxiosInstance,
  params: reqTypes.GetTransactionDetailsParams
): Promise<resTypes.Transaction> {
  const response = await instance.get<resTypes.Transaction>("/transaction", { params });
  return response.data;
}

export async function getTransactionListByAddress(
  instance: AxiosInstance,
  params: reqTypes.GetTransactionListByAddressParams
): Promise<resTypes.PaginatedTransactions> {
  const response = await instance.get<resTypes.PaginatedTransactions>("/transaction/list", {
    params,
  });
  return response.data;
}
