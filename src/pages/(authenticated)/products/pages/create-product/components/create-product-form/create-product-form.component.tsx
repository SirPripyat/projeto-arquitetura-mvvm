import ProductsTextFields from '@/pages/(authenticated)/products/components/products-text-fields/products-text-fields.component';
import useCreateOrUpdateProductForm from '@/pages/(authenticated)/products/hooks/use-create-or-update-product-form.hook';
import { Button } from '@/components/global/button';
import { ButtonHierarchy } from '@/enum/button-hierarchy.enum';

export default function CreateProductForm() {
  const { productsTextFieldsModel, findOutWhatSubmitFormToUse } =
    useCreateOrUpdateProductForm({ id: '' });

  return (
    <form
      onSubmit={(event) => findOutWhatSubmitFormToUse['create'](event)}
      className={'flex flex-col gap-8'}
    >
      <ProductsTextFields productsTextFields={productsTextFieldsModel} />

      <div className={'flex justify-end w-full'}>
        <Button.Wrapper hierarchy={ButtonHierarchy.Filled} type={'submit'}>
          Criar Produto
        </Button.Wrapper>
      </div>
    </form>
  );
}
