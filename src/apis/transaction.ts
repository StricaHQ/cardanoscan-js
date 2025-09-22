import { AxiosInstance } from "axios";
import * as reqTypes from "../types/reqTypes";
import * as resTypes from "../types/resTypes";

export async function getTransactionDetails(
  instance: AxiosInstance,
  params: reqTypes.GetTransactionDetailsParams
): Promise<resTypes.Transaction | undefined> {
  const response = await instance.get<resTypes.Transaction | undefined>("/transaction", { params });
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

export async function postSubmitTransaction(
  instance: AxiosInstance,
  params: reqTypes.postSubmitTransactionParams
): Promise<void> {
  const response = await instance.post<void>("/transaction/submit", params.tx, {
    headers: {
      "Content-Type": "application/cbor",
    },
  });
  return response.data;
}

export async function getTransactionSummary(
  instance: AxiosInstance,
  params: reqTypes.GetTransactionSummaryParams
): Promise<resTypes.TransactionSummary> {
  const response = await instance.get<resTypes.TransactionSummary>("/transaction/summary", {
    params,
  });
  return response.data;
}
