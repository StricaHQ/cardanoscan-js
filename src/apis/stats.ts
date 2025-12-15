import { AxiosInstance } from "axios";
import * as reqTypes from "../types/reqTypes";
import * as resTypes from "../types/resTypes";

// eslint-disable-next-line import/prefer-default-export
export async function getStatsDailyTxFee(
  instance: AxiosInstance,
  params: reqTypes.GetStatsDailyTxFeeParams
): Promise<resTypes.DailyTxFeeResponse> {
  const response = await instance.get<resTypes.DailyTxFeeResponse>("/stats/dailyTxFee", { params });
  return response.data;
}
