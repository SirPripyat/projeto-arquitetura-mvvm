import { useCallback, useEffect } from 'react';
import { getByIdBaseRequest } from '@/services/base-service/get-by-id-base-request.service';
import { IGetAllProducts } from '@/interfaces/products/get-all-products.interface';
import { productEndpoint } from '@/endpoints/products.endpoint';
import { useProductModelStore } from '@/stores/use-product-model.store';

interface useGetProductDataByIdProps {
  id: string;
}

export default function useGetProductDataById({
  id,
}: useGetProductDataByIdProps) {
  const { setProductModel } = useProductModelStore();

  const getProductDataById = useCallback(async () => {
    if (!id) return;

    await getByIdBaseRequest<IGetAllProducts>(productEndpoint.getById, id).then(
      (response) => {
        if (!response) return;
        setProductModel(response);
      },
    );
  }, [id]);

  useEffect(() => {
    const controller = new AbortController();

    getProductDataById();

    return () => controller.abort();
  }, [getProductDataById]);
}
