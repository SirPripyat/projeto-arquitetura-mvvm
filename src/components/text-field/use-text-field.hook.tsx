import Input from "@/components/input/input-password/input.component";
import PasswordInput from "@/components/input/password-input.component";
import {InputProps} from "@/interfaces/input.interface";

interface useTextFieldProps extends InputProps {
}

export default function useTextField({...otherProps}: useTextFieldProps) {
  const findOutWhatInputToRender = {
    password: <PasswordInput {...otherProps} />,
    default: <Input {...otherProps} />
  }

  return {
    findOutWhatInputToRender
  }
}