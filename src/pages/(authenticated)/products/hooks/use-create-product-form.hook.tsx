import { useProductModelStore } from '@/stores/use-product-model.store';
import { postBaseRequestService } from '@/services/base-service/post-base-request.service';
import { ICreateProduct } from '@/interfaces/products/create-product.interface';
import { productEndpoint } from '@/endpoints/products.endpoint';
import toast from 'react-hot-toast';
import { usePathname, useRouter } from 'next/navigation';
import { FormEvent, useEffect } from 'react';

export default function useCreateProductForm() {
  const { productModel } = useProductModelStore();

  const { push } = useRouter();
  const createProductForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await postBaseRequestService<ICreateProduct>(
      productEndpoint.create,
      productModel,
    )
      .then(() => {
        toast.success('Produto criado com sucesso!');
        push('/');
      })
      .catch(() => toast.error('Erro ao criar produto'));
  };

  const pathname = usePathname();
  const isCreateProductPage = pathname === '/products/create';

  const { resetProductModel } = useProductModelStore();

  useEffect(() => {
    if (!isCreateProductPage) return;

    resetProductModel();
  }, []);

  return {
    createProductForm,
  };
}
