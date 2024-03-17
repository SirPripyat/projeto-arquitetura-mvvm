import { useCallback, useEffect, useState } from 'react';
import { getBaseRequestService } from '@/services/base-service/get-base-request.service';
import { productEndpoint } from '@/endpoints/products.endpoint';
import { IGetAllProducts } from '@/interfaces/products/get-all-products.interface';

export default function useMyProductsTableBody() {
  const [productsTableData, setProductsTableData] = useState<IGetAllProducts[]>(
    [],
  );

  const handleProductData = useCallback((data: void | IGetAllProducts[]) => {
    if (!data) return;
    setProductsTableData(data);
  }, []);

  const findAllMyProducts = useCallback(async () => {
    await getBaseRequestService<IGetAllProducts[]>(productEndpoint.getAll).then(
      (data) => handleProductData(data),
    );
  }, [handleProductData]);

  useEffect(() => {
    const controller = new AbortController();

    findAllMyProducts();

    return () => controller.abort();
  }, [findAllMyProducts]);

  const productExists = productsTableData.length > 0;

  return {
    productsTableData,
    productExists,
  };
}
