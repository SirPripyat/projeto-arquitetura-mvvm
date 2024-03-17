import { useDeleteModalStore } from '@/stores/use-delete-modal.store';
import { useProductIdToDeleteModalStore } from '@/stores/use-product-id-to-delete-modal.store';
import { deleteBaseRequestService } from '@/services/base-service/delete-base-request.service';
import { productEndpoint } from '@/endpoints/products.endpoint';
import toast from 'react-hot-toast';

export default function useProductDeleteModal() {
  const { toggleDeleteModal } = useDeleteModalStore();
  const { productId, resetProductId } = useProductIdToDeleteModalStore();

  const deleteProduct = async () => {
    await deleteBaseRequestService(productEndpoint.delete, productId.toString())
      .then(() => toast.success('Produto deletado com sucesso'))
      .catch(() => toast.error('Erro ao deletar produto'));

    resetProductId();
    toggleDeleteModal();
    location.reload();
  };

  const closeDeleteModal = () => {
    resetProductId();
    toggleDeleteModal();
  };

  return {
    closeDeleteModal,
    deleteProduct,
  };
}
