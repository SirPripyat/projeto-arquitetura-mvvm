import useHandleProductTextFieldsModel from '@/pages/(authenticated)/products/hooks/use-handle-product-text-fields-model.hook';
import useCreateProductForm from '@/pages/(authenticated)/products/hooks/use-create-product-form.hook';
import useUpdateProductForm from '@/pages/(authenticated)/products/hooks/use-update-product-form.hook';
import useGetProductDataById from '@/pages/(authenticated)/products/hooks/use-get-product-data-by-id.hook';

interface useCreateOrUpdateProductFormProps {
  id?: string;
}

export default function useCreateOrUpdateProductForm({
  id,
}: useCreateOrUpdateProductFormProps) {
  const { productsTextFieldsModel } = useHandleProductTextFieldsModel();

  const { createProductForm } = useCreateProductForm();
  const { updateProductForm } = useUpdateProductForm();

  useGetProductDataById({
    id: id ?? '',
  });

  const findOutWhatSubmitFormToUse = {
    create: createProductForm,
    update: updateProductForm,
  };

  return {
    productsTextFieldsModel,
    findOutWhatSubmitFormToUse,
  };
}
