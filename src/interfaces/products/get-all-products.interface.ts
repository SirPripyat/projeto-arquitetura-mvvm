import { ProductStatus } from '@/enum/product-status.enum';

export interface IGetAllProducts {
  id: number;
  name: string;
  type: string;
  size: string;
  quantity: number;
  productStatus: ProductStatus;
}
