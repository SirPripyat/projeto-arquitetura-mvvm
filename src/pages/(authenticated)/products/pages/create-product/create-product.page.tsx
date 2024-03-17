'use client';

import TitleBackButton from './components/title-back-button/title-back-button.component';
import CreateProductForm from '@/pages/(authenticated)/products/pages/create-product/components/create-product-form/create-product-form.component';

export default function CreateProductPage() {
  return (
    <>
      <TitleBackButton />
      <CreateProductForm />
    </>
  );
}
