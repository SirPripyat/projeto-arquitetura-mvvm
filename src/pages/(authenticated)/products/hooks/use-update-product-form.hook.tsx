import { useProductModelStore } from '@/stores/use-product-model.store';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import { updateBaseRequestService } from '@/services/base-service/update-base-request.service';
import { productEndpoint } from '@/endpoints/products.endpoint';
import { ICreateProduct } from '@/interfaces/products/create-product.interface';
import toast from 'react-hot-toast';

export default function useUpdateProductForm() {
  const { productModel } = useProductModelStore();

  const { push } = useRouter();

  const updateProductForm = async (
    event: FormEvent<HTMLFormElement>,
    id: string,
  ) => {
    event.preventDefault();

    await updateBaseRequestService<ICreateProduct>(
      productEndpoint.update,
      id,
      productModel,
    )
      .then(() => {
        toast.success('Produto atualizado com sucesso!');
        push('/');
      })
      .catch(() => toast.error('Erro ao atualizar produto'));
  };

  return {
    updateProductForm,
  };
}
