import { axiosClient } from '@/services/axios-client.service';

export const updateBaseRequestService = async <T>(
  url: string,
  id: string,
  objectDto: T,
): Promise<T | void> => {
  const urlRequest = `${url}/${id}`;

  return await axiosClient
    .put<T>(urlRequest, objectDto)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
