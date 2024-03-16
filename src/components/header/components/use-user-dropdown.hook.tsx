import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function useUserDropdown() {
  const [userDropdownIsOpen, setUserDropdownIsOpen] = useState(false);

  const toggleUserDropdown = () => setUserDropdownIsOpen(!userDropdownIsOpen);

  const chevronIcon = userDropdownIsOpen ? <ChevronUp /> : <ChevronDown />;

  return {
    userDropdownIsOpen,
    chevronIcon,
    toggleUserDropdown,
  };
}
