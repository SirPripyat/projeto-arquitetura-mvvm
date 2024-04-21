import { IInputsToRender } from '@/interfaces/register-user-inputs-model.interface';
import { ICreateProduct } from '@/interfaces/products/create-product.interface';
import { ChangeEvent } from 'react';
import { useProductModelStore } from '@/stores/use-product-model.store';

export default function useHandleProductTextFieldsModel() {
  const { productModel, updateProductModel } = useProductModelStore();
  const handleChangeInputsValues = (
    eventValues: ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = eventValues.target;

    updateProductModel({ [name]: value });
  };

  const productsTextFieldsModel: IInputsToRender<ICreateProduct>[] = [
    {
      type: 'default',
      label: 'Tipo',
      placeholder: 'Tipo do produto',
      name: 'type',
      onChange: handleChangeInputsValues,
      value: productModel.type,
    },
    {
      type: 'default',
      label: 'Nome',
      placeholder: 'Nome do produto',
      name: 'name',
      onChange: handleChangeInputsValues,
      value: productModel.name,
    },
    {
      type: 'default',
      label: 'Tamanho',
      placeholder: 'Tamanho do produto',
      name: 'size',
      onChange: handleChangeInputsValues,
      value: productModel.size,
    },
    {
      type: 'number',
      label: 'Quantidade',
      placeholder: 'Quantidade do produto',
      name: 'quantity',
      onChange: handleChangeInputsValues,
      value: productModel.quantity,
    },
  ];

  return {
    productsTextFieldsModel,
  };
}
