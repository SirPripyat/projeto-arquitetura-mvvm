'use client';

import useMyProductsTableBody from '@/pages/(authenticated)/home/components/my-products-table-body/use-my-products-table-body.hook';
import { IGetAllProducts } from '@/interfaces/products/get-all-products.interface';
import { MyProductsTableDataCell } from '@/pages/(authenticated)/home/components/my-products-table-data-cell/index.component';

export default function MyProductsTableBody() {
  const { productsTableData, productExists } = useMyProductsTableBody();

  return (
    <tbody>
      {productExists &&
        productsTableData.map(
          ({
            id,
            name,
            type,
            size,
            quantity,
            productStatus,
          }: IGetAllProducts) => (
            <tr
              key={id}
              className={
                'text-gray-300 text-sm font-medium px-4 h-10 even:bg-slate-900 odd:bg-slate-800'
              }
            >
              <MyProductsTableDataCell.Default value={id} />
              <MyProductsTableDataCell.Default value={type} />
              <MyProductsTableDataCell.Default value={name} />
              <MyProductsTableDataCell.Default value={size} />
              <MyProductsTableDataCell.Default value={quantity} />
              <MyProductsTableDataCell.Status value={productStatus} />
              <MyProductsTableDataCell.Edit value={id} />
              <MyProductsTableDataCell.Delete value={id} />
            </tr>
          ),
        )}
    </tbody>
  );
}
