import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { userDefaultValue } from '@/default-values/user.default-value';
import { IInputsToRender } from '@/interfaces/register-user-inputs-model.interface';
import { postBaseRequestService } from '@/services/base-service/post-base-request.service';
import { userEndpoint } from '@/endpoints/users.endpoint';
import { IUserLogin } from '@/interfaces/users/user-login.interface';
import { userLoginDefaultValue } from '@/default-values/user-login.default-value';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function useLoginUserForm() {
  const [userModel, setUserModel] = useState<IUserLogin>(userLoginDefaultValue);

  const handleChangeInputsValues = (
    eventValues: ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = eventValues.target;

    setUserModel((prevUserModel) => ({
      ...prevUserModel,
      [name]: value,
    }));
  };

  const loginUserInputsModel: IInputsToRender<IUserLogin>[] = [
    {
      type: 'default',
      label: 'E-Mail',
      placeholder: 'campo@dominio.com',
      name: 'email',
      onChange: handleChangeInputsValues,
      value: userModel.email,
    },
    {
      type: 'password',
      label: 'Senha',
      placeholder: 'Digite sua senha',
      name: 'password',
      onChange: handleChangeInputsValues,
      value: userModel.password,
    },
  ];

  const { push } = useRouter();

  const submitForm = async (event: SyntheticEvent) => {
    event.preventDefault();

    const response = await postBaseRequestService<IUserLogin>(
      userEndpoint.login,
      userModel,
    );

    if (response.status === 401)
      return toast.error('Usuário ou senha inválidos');

    toast.success('Login efetuado com sucesso');
    return push('/');
  };

  const buttonDisabled = !userModel.email || !userModel.password;

  return {
    loginUserInputsModel,
    submitForm,
    buttonDisabled,
  };
}
