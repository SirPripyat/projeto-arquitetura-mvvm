import { Logo } from '@/components/logo';
import UserDropdown from '@/components/header/components/user-dropdown.component';

export default function Header() {
  return (
    <header
      className={
        'bg-slate-900 border-b-2 border-slate-800 px-10 py-2 flex justify-between items-center'
      }
    >
      <Logo.Small />

      <UserDropdown />
    </header>
  );
}
