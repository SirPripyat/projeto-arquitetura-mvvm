import { IInputsToRender } from '@/interfaces/register-user-inputs-model.interface';
import { ICreateProduct } from '@/interfaces/products/create-product.interface';
import TextField from '@/components/global/text-field/text-field.component';

interface ProductsTextFieldsProps {
  productsTextFields: IInputsToRender<ICreateProduct>[];
}

export default function ProductsTextFields({
  productsTextFields,
}: ProductsTextFieldsProps) {
  return (
    <div className={'grid grid-cols-2 gap-8'}>
      {productsTextFields.map(({ ...fields }, index: number) => (
        <TextField key={index} {...fields} />
      ))}
    </div>
  );
}
