import { axiosClient } from '@/services/axios-client.service';

export const getBaseRequestService = async <T>(
  url: string,
): Promise<T | void> => {
  return await axiosClient
    .get<T>(url)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
