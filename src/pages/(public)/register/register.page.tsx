'use client';

import { useRouter } from 'next/navigation';
import { Logo } from '@/components/global/logo';
import RegisterUserForm from '@/app/(public)/register/components/register-user-form.component';
import { Button } from '@/components/global/button';
import { ButtonHierarchy } from '@/enum/button-hierarchy.enum';
import React from 'react';

export default function RegisterPage() {
  const { push } = useRouter();

  return (
    <div className="flex flex-col justify-center gap-8 w-1/4">
      <Logo.Medium />

      <RegisterUserForm />

      <div className="flex flex-col justify-center items-center gap-1 text-gray-50 w-full">
        <p>Já possui conta?</p>
        <Button.Wrapper
          onClick={() => push('/login')}
          type={'button'}
          hierarchy={ButtonHierarchy.Ghosted}
        >
          Logar
        </Button.Wrapper>
      </div>
    </div>
  );
}
