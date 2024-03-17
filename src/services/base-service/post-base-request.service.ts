import { axiosClient } from '@/services/axios-client.service';

export const postBaseRequestService = async <T>(
  url: string,
  objectDto: T,
): Promise<T | void> => {
  return await axiosClient
    .post<T>(url, objectDto)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
