import MyProductsTitleAndAddButton from '@/pages/(authenticated)/home/components/my-products-title-and-add-button/my-products-title-and-add-button.component';
import MyProductsTable from '@/pages/(authenticated)/home/components/my-products-table/my-products-table.component';
import ProductDeleteModal from '@/pages/(authenticated)/home/components/product-delete-modal/product-delete-modal.component';

export default function HomePage() {
  return (
    <>
      <MyProductsTitleAndAddButton />

      <MyProductsTable />

      <ProductDeleteModal />
    </>
  );
}
