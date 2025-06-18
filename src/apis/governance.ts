import { AxiosInstance } from "axios";
import * as reqTypes from "../types/reqTypes";
import * as resTypes from "../types/resTypes";

export async function getCCHotDetails(
  instance: AxiosInstance,
  params: reqTypes.GetCCHotDetailsParams
): Promise<resTypes.ccHot | undefined> {
  const response = await instance.get<resTypes.ccHot | undefined>("/governance/ccHot", { params });
  return response.data;
}

export async function getCCMemberDetails(
  instance: AxiosInstance,
  params: reqTypes.GetCCMemberDetailsParams
): Promise<resTypes.ccMember | undefined> {
  const response = await instance.get<resTypes.ccMember | undefined>("/governance/ccMember", {
    params,
  });
  return response.data;
}

export async function getCommitteeInformation(
  instance: AxiosInstance
): Promise<resTypes.Committee | undefined> {
  const response = await instance.get<resTypes.Committee | undefined>("/governance/committee");
  return response.data;
}

export async function getCommitteeMembers(
  instance: AxiosInstance,
  params: reqTypes.GetCommitteeMembersParams
): Promise<resTypes.PaginatedCommitteeMembers> {
  const response = await instance.get<resTypes.PaginatedCommitteeMembers>(
    "/governance/committee/members",
    {
      params,
    }
  );
  return response.data;
}

export async function getDRepInformation(
  instance: AxiosInstance,
  params: reqTypes.GetDRepInformationParams
): Promise<resTypes.DRep | undefined> {
  const response = await instance.get<resTypes.DRep | undefined>("/governance/dRep", { params });
  return response.data;
}

export async function getDReps(
  instance: AxiosInstance,
  params: reqTypes.GetDRepListParams
): Promise<resTypes.PaginatedDReps> {
  const response = await instance.get<resTypes.PaginatedDReps>("/governance/dRep/list", {
    params,
  });
  return response.data;
}

export async function getGovernanceAction(
  instance: AxiosInstance,
  params: reqTypes.GetGovActionParams
): Promise<resTypes.GovActionResponse | undefined> {
  const response = await instance.get<resTypes.GovActionResponse | undefined>(
    "/governance/action",
    {
      params,
    }
  );
  return response.data;
}
