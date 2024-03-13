import { Button } from "@/components/button";
import TextField from "@/components/text-field/text-field.component";
import { ButtonHierarchy } from "@/enum/button-hierarchy.enum";
import React from "react";

export default function Register() {
  return (
    <>
      <img
        src="/background.svg"
        alt="background"
        className="absolute left-1 w-1/4"
      />
      <div className="flex flex-col gap-8 w-1/4">
        <div className="flex  justify-center text-4xl text-white">
          <p>Project Name</p>
        </div>
        <form className="flex flex-col gap-8">
          <TextField label={"Nome Completo"} placeholder={"Nome completo"} />

          <TextField label={"E-Mail"} placeholder={"E-mail"} />

          <TextField label={"Senha"} placeholder={"Senha"} />

          <Button.Wrapper hierarchy={ButtonHierarchy.Filled}>
            Criar conta
          </Button.Wrapper>
        </form>
        <div className="flex flex-col justify-center items-center text-white">
          <p>Já possui conta?</p>
          <Button.Wrapper hierarchy={ButtonHierarchy.Ghosted}>
            Logar
          </Button.Wrapper>
        </div>
      </div>
    </>
  );
}
