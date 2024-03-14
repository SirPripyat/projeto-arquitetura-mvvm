"use client";

import {InputHTMLAttributes} from "react";
import Input from "@/components/input/input-password/input.component";
import usePasswordInput from "@/components/input/input-password/use-password-input.hook";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
}

export default function PasswordInput({...props}: PasswordInputProps) {

  const {inputType, passwordIcon: Icon, togglePassword} = usePasswordInput()
  
  return (
    <div className={"relative"}>
      <Input type={inputType} {...props} />

      <i onClick={togglePassword}
         className={"w-6 h-6 absolute right-3 top-2 text-gray-200 flex items-center justify-center cursor-pointer"}>
        <Icon className={"w-5 h-5"}/>
      </i>
    </div>
  )
}