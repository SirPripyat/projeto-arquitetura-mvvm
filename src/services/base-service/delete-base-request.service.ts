import { axiosClient } from '@/services/axios-client.service';

export const deleteBaseRequestService = async (
  url: string,
  id: string,
): Promise<boolean> => {
  const urlRequest = `${url}/${id}`;

  return await axiosClient
    .delete(urlRequest)
    .then(() => true)
    .catch((error) => {
      console.log(error);
      return false;
    });
};
