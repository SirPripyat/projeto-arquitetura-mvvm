'use client';

import useCreateOrUpdateProductForm from '@/pages/(authenticated)/products/hooks/use-create-or-update-product-form.hook';
import ProductsTextFields from '@/pages/(authenticated)/products/components/products-text-fields/products-text-fields.component';
import { Button } from '@/components/global/button';
import { ButtonHierarchy } from '@/enum/button-hierarchy.enum';

interface UpdateProductFormProps {
  id: string;
}

export default function UpdateProductForm({ id }: UpdateProductFormProps) {
  const { productsTextFieldsModel, findOutWhatSubmitFormToUse } =
    useCreateOrUpdateProductForm({
      id: id,
    });

  return (
    <form
      onSubmit={(event) => findOutWhatSubmitFormToUse['update'](event, id)}
      className={'flex flex-col gap-8'}
    >
      <ProductsTextFields productsTextFields={productsTextFieldsModel} />

      <div className={'flex justify-end w-full'}>
        <Button.Wrapper hierarchy={ButtonHierarchy.Filled} type={'submit'}>
          Editar Produto
        </Button.Wrapper>
      </div>
    </form>
  );
}
