import {Button} from "@/components/button";
import {ButtonHierarchy} from "@/enum/button-hierarchy.enum";
import React from "react";
import Image from "next/image";
import RegisterUserForm
  from "@/app/(public)/register/components/register-user-form.component";

export default function Register() {
  return (
    <>
      <Image
        src="/background.svg"
        alt="background"
        className="absolute left-1 w-1/4 opacity-30"
        width={100}
        height={100}
      />

      <div className="flex flex-col justify-center gap-8 w-1/4">
        <h1 className={"text-4xl text-gray-50 text-center"}>Project Name</h1>

        <RegisterUserForm/>

        <div
          className="flex flex-col justify-center items-center gap-1 text-gray-50 w-full">
          <p>Já possui conta?</p>
          <Button.Wrapper hierarchy={ButtonHierarchy.Ghosted}>
            Logar
          </Button.Wrapper>
        </div>
      </div>
    </>
  );
}
