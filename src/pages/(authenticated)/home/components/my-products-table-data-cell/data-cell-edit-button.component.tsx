import { ITableDataCell } from '@/interfaces/table-data-cell.interface';
import { Edit } from 'lucide-react';
import { useRouter } from 'next/navigation';
import IconButton from '@/components/global/icon-button/icon-button.component';

interface DataCellStatusProps extends ITableDataCell {}

export default function DataCellEditButton({ value: id }: DataCellStatusProps) {
  const { push } = useRouter();

  return (
    <td className={'h-12 px-4'}>
      <IconButton icon={Edit} onClick={() => push(`/products/edit/${id}`)} />
    </td>
  );
}
