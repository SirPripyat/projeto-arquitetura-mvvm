'use client';

import { Package } from 'lucide-react';
import { Button } from '@/components/global/button';
import { ButtonHierarchy } from '@/enum/button-hierarchy.enum';
import { useRouter } from 'next/navigation';
import Title from '@/components/global/title/title.component';

export default function MyProductsTitleAndAddButton() {
  const { push } = useRouter();

  return (
    <div className={'flex justify-between w-full'}>
      <div className={'flex items-center gap-2 text-gray-50'}>
        <Package className={'text-gray-300 h-6 w-6'} />
        <Title title={'Meu Produtos'} />
        <h4 className={'font-bold'}>(15)</h4>
      </div>

      <Button.Wrapper
        hierarchy={ButtonHierarchy.Filled}
        type={'button'}
        onClick={() => push('/products/create')}
      >
        Criar Produto
      </Button.Wrapper>
    </div>
  );
}
