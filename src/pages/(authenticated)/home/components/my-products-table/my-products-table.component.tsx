import MyProductsTableHead from '@/pages/(authenticated)/home/components/my-products-table-head/my-products-table-head.component';
import MyProductsTableBody from '@/pages/(authenticated)/home/components/my-products-table-body/my-products-table-body.component';

export default function MyProductsTable() {
  return (
    <table
      className={'table-auto min-w-full text-left rounded-lg overflow-hidden'}
    >
      <MyProductsTableHead />
      <MyProductsTableBody />
    </table>
  );
}
