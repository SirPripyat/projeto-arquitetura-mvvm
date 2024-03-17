import useMyProductsTableHead from '@/pages/(authenticated)/home/components/my-products-table-head/use-my-products-table-head.hook';

export default function MyProductsTableHead() {
  const { tableHeader } = useMyProductsTableHead();

  return (
    <thead>
      <tr>
        {tableHeader.map(({ label, key }) => (
          <th
            key={key}
            className={'text-gray-500 bg-slate-900 px-4 py-2 font-medium'}
          >
            {label}
          </th>
        ))}
      </tr>
    </thead>
  );
}
