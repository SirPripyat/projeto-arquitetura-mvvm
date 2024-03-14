import {ChangeEvent, useState} from "react";
import {User} from "@/interfaces/user.interface";
import {userDefaultValue} from "@/default-values/user.default-value";
import {
  RegisterUserInputsModel
} from "@/interfaces/register-user-inputs-model.interface";


export default function useRegisterUserForm() {
  const [userModel, setUserModel] = useState<User>(userDefaultValue)

  const handleChangeInputsValues = (eventValues: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = eventValues.target;

    setUserModel(prevUserModel => ({
      ...prevUserModel,
      [name]: value
    }));
  }

  const registerUserInputsModel: RegisterUserInputsModel[] = [
    {
      type: "default",
      label: "Nome Completo",
      placeholder: "Nome completo",
      name: "name",
      onChange: handleChangeInputsValues
    },
    {
      type: "default",
      label: "E-Mail",
      placeholder: "campo@dominio.com",
      name: "email",
      onChange: handleChangeInputsValues
    },
    {
      type: "password",
      label: "Senha",
      placeholder: "Digite sua senha",
      name: "password",
      onChange: handleChangeInputsValues
    }
  ]

  const submitForm = () => console.log(userModel)

  return {
    registerUserInputsModel,
    submitForm
  }
}