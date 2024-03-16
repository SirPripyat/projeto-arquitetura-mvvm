'use client';

import { LogOut, User } from 'lucide-react';
import useUserDropdown from '@/components/header/components/use-user-dropdown.hook';
import { useRouter } from 'next/navigation';

export default function UserDropdown() {
  const { userDropdownIsOpen, chevronIcon, toggleUserDropdown } =
    useUserDropdown();

  const { push } = useRouter();

  return (
    <div className={'relative'}>
      <div
        onClick={toggleUserDropdown}
        className={'px-3 py-2 flex gap-8 items-center cursor-pointer'}
      >
        <div className={'flex items-center gap-3'}>
          <User className={'text-gray-600 w-4 h-4'} />
          <p className={'text-sm text-gray-300 font-bold'}>User name</p>
        </div>

        <i className={'text-gray-300 w-6 h-6'}>{chevronIcon}</i>
      </div>

      {userDropdownIsOpen && (
        <div
          className={
            'bg-slate-900 absolute p-2 rounded-lg border border-slate-800 min-w-full'
          }
        >
          <button
            onClick={() => push('/login')}
            className={
              'flex items-center gap-3 text-gray-300 font-bold py-2 px-3 w-full rounded hover:bg-slate-800/70'
            }
          >
            <LogOut className={'w-4 h-4'} />
            Sair
          </button>
        </div>
      )}
    </div>
  );
}
