import { ITableDataCell } from '@/interfaces/table-data-cell.interface';
import { ProductStatus } from '@/enum/product-status.enum';

interface DataCellStatusProps extends ITableDataCell {}

export default function DataCellStatus({ value }: DataCellStatusProps) {
  const statusColorClassName = () => {
    if (value === ProductStatus.ACTIVE)
      return {
        elipse: 'bg-green-500',
        text: 'text-green-500',
      };

    if (value === ProductStatus.INACTIVE)
      return {
        elipse: 'bg-red-500',
        text: 'text-red-500',
      };

    return {
      elipse: 'bg-gray-500',
      text: 'text-gray-500',
    };
  };
  const { elipse, text } = statusColorClassName();

  const statusText = value === ProductStatus.ACTIVE ? 'Ativo' : 'Inativo';

  return (
    <td className={'h-12 px-4 flex items-center gap-3'}>
      <div className={`${elipse} h-3 w-3 rounded-full`}></div>
      <p className={`${text}`}>{statusText}</p>
    </td>
  );
}
