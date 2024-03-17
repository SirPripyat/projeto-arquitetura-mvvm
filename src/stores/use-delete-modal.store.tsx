import { create } from 'zustand';

interface DeleteModalStore {
  deleteModal: boolean;
  toggleDeleteModal: () => void;
}

export const useDeleteModalStore = create<DeleteModalStore>((set) => ({
  deleteModal: false,
  toggleDeleteModal: () =>
    set((state) => ({ deleteModal: !state.deleteModal })),
}));
