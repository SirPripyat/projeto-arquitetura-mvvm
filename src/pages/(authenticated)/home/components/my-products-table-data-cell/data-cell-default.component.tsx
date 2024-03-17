import { ITableDataCell } from '@/interfaces/table-data-cell.interface';

interface DataCellDefaultProps extends ITableDataCell {}

export default function DataCellDefault({ value }: DataCellDefaultProps) {
  return <td className={'h-12 px-4'}>{value}</td>;
}
