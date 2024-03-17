import TitleBackButton from '@/pages/(authenticated)/products/pages/edit-product/components/title-back-button/title-back-button.component';
import UpdateProductForm from '@/pages/(authenticated)/products/pages/edit-product/components/update-product-form/update-product-form.component';

interface EditProductProps {
  id: string;
}

export default function EditProductPage({ id }: EditProductProps) {
  return (
    <>
      <TitleBackButton />
      <UpdateProductForm id={id} />
    </>
  );
}
