import { Button } from "@/components/button";
import { ButtonHierarchy } from "@/enum/button-hierarchy.enum";
import TextField from "@/components/text-field/text-field.component";
import Image from "next/image";
import LoginUserForm from "./components/login-user-form.component";

export default function Home() {
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

        <LoginUserForm />

        <div className="flex flex-col justify-center items-center gap-1 text-gray-50 w-full">
          <p>Não possui uma conta?</p>
          <Button.Wrapper type={"button"} hierarchy={ButtonHierarchy.Ghosted}>
            Criar Conta
          </Button.Wrapper>
        </div>
      </div>
    </>
  );
}
