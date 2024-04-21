import Input from '@/components/global/input/input-password/input.component';
import PasswordInput from '@/components/global/input/password-input.component';
import { InputProps } from '@/interfaces/input.interface';

interface useTextFieldProps extends InputProps {}

export default function useTextField({ ...otherProps }: useTextFieldProps) {
  const findOutWhatInputToRender = {
    default: <Input {...otherProps} />,
    password: <PasswordInput {...otherProps} />,
    number: <Input type={'number'} {...otherProps} />,
  };

  return {
    findOutWhatInputToRender,
  };
}
