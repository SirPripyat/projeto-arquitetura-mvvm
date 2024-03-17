import { ProductStatus } from '@/enum/product-status.enum';

export interface ICreateProduct {
  name: string;
  type: string;
  size: string;
  quantity: number;
  productStatus: ProductStatus;
}
