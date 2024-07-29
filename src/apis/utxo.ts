import { AxiosInstance } from "axios";
import * as reqTypes from "../types/reqTypes";
import * as resTypes from "../types/resTypes";

// eslint-disable-next-line import/prefer-default-export
export async function getUTXOList(
  instance: AxiosInstance,
  params: reqTypes.GetUtxoListParams
): Promise<resTypes.PaginatedUtxos> {
  const response = await instance.get<resTypes.PaginatedUtxos>("/utxo/list", { params });
  return response.data;
}
