'use client';

import { Logo } from '../logo';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { push } = useRouter();

  return (
    <header
      className={
        'bg-slate-900 border-b-2 border-slate-800 px-10 py-4 flex justify-between items-center'
      }
    >
      <Logo.Small />

      <LogOut
        className={'text-gray-50 cursor-pointer hover:text-gray-300'}
        onClick={() => push('/login')}
      />
    </header>
  );
}
