import { useRouter } from 'next/navigation';
import { Logo } from '@/components/global/logo';
import LoginUserForm from '@/app/(public)/login/components/login-user-form.component';
import { Button } from '@/components/global/button';
import { ButtonHierarchy } from '@/enum/button-hierarchy.enum';

export default function LoginPage() {
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
