'use client';

import { Button } from '@/components/global/button';
import { ButtonHierarchy } from '@/enum/button-hierarchy.enum';
import { ChevronLeft } from 'lucide-react';
import Title from '@/components/global/title/title.component';
import { useRouter } from 'next/navigation';

export default function TitleBackButton() {
  const { push } = useRouter();

  return (
    <div className={'flex gap-4 items-center'}>
      <Button.Wrapper
        onClick={() => push('/')}
        hierarchy={ButtonHierarchy.Outlined}
        type={'button'}
      >
        <Button.Icon icon={ChevronLeft} />
        Voltar
      </Button.Wrapper>
      <Title title={'Criar Produto'} />
    </div>
  );
}
