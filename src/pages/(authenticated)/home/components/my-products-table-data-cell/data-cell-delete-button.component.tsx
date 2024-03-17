import IconButton from '@/components/global/icon-button/icon-button.component';
import { ITableDataCell } from '@/interfaces/table-data-cell.interface';
import { Trash } from 'lucide-react';
import { useDeleteModalStore } from '@/stores/use-delete-modal.store';
import { useProductIdToDeleteModalStore } from '@/stores/use-product-id-to-delete-modal.store';

interface DataCellDeleteProps extends ITableDataCell {}

export default function DataCellDeleteButton({
  value: id,
}: DataCellDeleteProps) {
  const { toggleDeleteModal } = useDeleteModalStore();
  const { setProductId } = useProductIdToDeleteModalStore();

  return (
    <td className={'h-12 px-4'}>
      <IconButton
        icon={Trash}
        onClick={() => {
          toggleDeleteModal();
          setProductId(id);
        }}
      />
    </td>
  );
}
