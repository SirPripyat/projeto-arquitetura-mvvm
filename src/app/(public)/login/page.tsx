import {Button} from "@/components/button";
import {ButtonHierarchy} from "@/enum/button-hierarchy.enum";
import TextField from "@/components/text-field/text-field.component";

export default function Home() {
  return (
    <>
      <form className="flex flex-col gap-6">
        <TextField label={"E-Mail"} />
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>
        <button type="submit">Login</button>
      </form>

      <div>
        <p>Não possui conta?</p>
        <Button.Wrapper hierarchy={ButtonHierarchy.Ghosted}>
          Criar conta
        </Button.Wrapper>
      </div>
    </>
  );
}
