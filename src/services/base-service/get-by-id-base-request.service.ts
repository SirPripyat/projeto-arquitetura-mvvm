import { axiosClient } from '@/services/axios-client.service';

export const getByIdBaseRequest = async <T>(url: string, id: string) => {
  const urlRequest = `${url}/${id}`;

  return await axiosClient
    .get<T>(urlRequest)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
