import { axiosClient } from '@/services/axios-client.service';
import { AxiosResponse } from 'axios';

export const postBaseRequestService = async <T>(
  url: string,
  objectDto: T,
): Promise<AxiosResponse<T>> => {
  return await axiosClient.post<T>(url, objectDto);
};
