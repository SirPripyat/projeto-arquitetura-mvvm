import { ICreateProduct } from '@/interfaces/products/create-product.interface';
import { ProductStatus } from '@/enum/product-status.enum';

export const createProductDefaultValue: ICreateProduct = {
  name: '',
  type: '',
  size: '',
  quantity: 0,
  productStatus: ProductStatus.ACTIVE,
};
