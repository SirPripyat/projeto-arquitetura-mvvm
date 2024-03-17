'use client';

import { useDeleteModalStore } from '@/stores/use-delete-modal.store';
import Title from '@/components/global/title/title.component';
import IconButton from '@/components/global/icon-button/icon-button.component';
import { X } from 'lucide-react';
import { Button } from '@/components/global/button';
import { ButtonHierarchy } from '@/enum/button-hierarchy.enum';
import useProductDeleteModal from '@/pages/(authenticated)/home/components/product-delete-modal/use-product-delete-modal.hook';

export default function ProductDeleteModal() {
  const { deleteModal } = useDeleteModalStore();

  const { closeDeleteModal, deleteProduct } = useProductDeleteModal();

  return (
    <>
      {deleteModal && (
        <div
          className={
            'absolute left-0 top-0 w-full h-full bg-slate-950/90 z-20 text-gray-50 flex justify-center items-center'
          }
        >
          <div
            className={'bg-slate-900 p-6 rounded-lg w-1/3 flex flex-col gap-8'}
          >
            <div className={'w-full flex justify-between items-center'}>
              <Title title={'Excluir produto'} />
              <IconButton icon={X} onClick={closeDeleteModal} />
            </div>

            <p className={'text-gray-300'}>
              Tem certeza que deseja excluir este produto? Esta ação não pode
              ser desfeita.
            </p>

            <div className={'w-full flex justify-end gap-4'}>
              <Button.Wrapper
                hierarchy={ButtonHierarchy.Outlined}
                type={'button'}
                onClick={closeDeleteModal}
              >
                Cancelar
              </Button.Wrapper>
              <Button.Wrapper
                onClick={deleteProduct}
                hierarchy={ButtonHierarchy.Filled}
                type={'button'}
              >
                Excluir
              </Button.Wrapper>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
