import { AxiosInstance } from "axios";
import * as reqTypes from "../types/reqTypes";
import * as resTypes from "../types/resTypes";

export async function getVotesByVoter(
  instance: AxiosInstance,
  params: reqTypes.GetVotesByVoterParams
): Promise<resTypes.PaginatedVotes> {
  const response = await instance.get<resTypes.PaginatedVotes>("/votes/byVoter", { params });
  return response.data;
}

export async function getVotesByAction(
  instance: AxiosInstance,
  params: reqTypes.GetVotesByActionParams
): Promise<resTypes.PaginatedVotes> {
  const response = await instance.get<resTypes.PaginatedVotes>("/votes/byAction", { params });
  return response.data;
}
