import { Eye, EyeOff, LucideIcon } from 'lucide-react';
import { useState } from 'react';

export default function usePasswordInput() {
  const [inputType, setInputType] = useState<'password' | 'text'>('password');
  const [passwordIcon, setPasswordIcon] = useState<LucideIcon>(Eye);

  const togglePassword = () => {
    if (inputType === 'password') {
      setPasswordIcon(EyeOff);
      setInputType('text');
    }

    if (inputType === 'text') {
      setPasswordIcon(Eye);
      setInputType('password');
    }
  };

  return {
    togglePassword,
    passwordIcon,
    inputType,
  };
}
