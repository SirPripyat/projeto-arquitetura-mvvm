'use client';

import { Button } from '@/components/global/button';
import { ButtonHierarchy } from '@/enum/button-hierarchy.enum';
import { ChevronLeft } from 'lucide-react';
import Title from '@/components/global/title/title.component';
import { useRouter } from 'next/navigation';

export default function TitleBackButton() {
  const { push } = useRouter();

  return (
    <div className={'flex items-center gap-4'}>
      <Button.Wrapper
        onClick={() => push('/')}
        hierarchy={ButtonHierarchy.Outlined}
        type={'button'}
      >
        <Button.Icon icon={ChevronLeft} />
        Voltar
      </Button.Wrapper>
      <Title title={'Editar produto'} />
    </div>
  );
}
