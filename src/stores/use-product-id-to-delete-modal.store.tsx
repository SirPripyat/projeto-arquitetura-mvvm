import { create } from 'zustand';

interface ProductIdToDeleteModalStore {
  productId: number;
  setProductId: (id: string | number) => void;
  resetProductId: () => void;
}

export const useProductIdToDeleteModalStore =
  create<ProductIdToDeleteModalStore>((set) => ({
    productId: 0,
    setProductId: (id) => set({ productId: Number(id) }),
    resetProductId: () => set({ productId: 0 }),
  }));
