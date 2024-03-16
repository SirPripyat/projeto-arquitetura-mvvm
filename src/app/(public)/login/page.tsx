'use client';

import { Button } from '@/components/button';
import { ButtonHierarchy } from '@/enum/button-hierarchy.enum';
import LoginUserForm from './components/login-user-form.component';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/logo';

export default function Home() {
  const { push } = useRouter();

  return (
    <div className="flex flex-col justify-center gap-8 w-1/4">
      <Logo.Medium />

      <LoginUserForm />

      <div className="flex flex-col justify-center items-center gap-1 text-gray-50 w-full">
        <p>Não possui uma conta?</p>
        <Button.Wrapper
          type={'button'}
          hierarchy={ButtonHierarchy.Ghosted}
          onClick={() => push('/register')}
        >
          Criar Conta
        </Button.Wrapper>
      </div>
    </div>
  );
}
