import { create } from 'zustand';
import { createProductDefaultValue } from '@/default-values/product.default-value';
import { ICreateProduct } from '@/interfaces/products/create-product.interface';

interface ProductStore {
  productModel: ICreateProduct;
  setProductModel: (product: ICreateProduct) => void;
  updateProductModel: (update: Partial<ICreateProduct>) => void;
  resetProductModel: () => void;
}

export const useProductModelStore = create<ProductStore>((set) => ({
  productModel: createProductDefaultValue,
  setProductModel: (product) => set({ productModel: product }),
  updateProductModel: (update) =>
    set((state) => ({ productModel: { ...state.productModel, ...update } })),
  resetProductModel: () => set({ productModel: createProductDefaultValue }),
}));
