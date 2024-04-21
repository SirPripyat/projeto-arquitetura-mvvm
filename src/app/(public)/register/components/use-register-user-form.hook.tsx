import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { userDefaultValue } from '@/default-values/user.default-value';
import { IInputsToRender } from '@/interfaces/register-user-inputs-model.interface';
import { useRouter } from 'next/navigation';
import { IUser } from '@/interfaces/users/user.interface';
import { postBaseRequestService } from '@/services/base-service/post-base-request.service';
import { userEndpoint } from '@/endpoints/users.endpoint';
import toast from 'react-hot-toast';

export default function useRegisterUserForm() {
  const [userModel, setUserModel] = useState<IUser>(userDefaultValue);

  const handleChangeInputsValues = (
    eventValues: ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = eventValues.target;

    setUserModel((prevUserModel: IUser) => ({
      ...prevUserModel,
      [name]: value,
    }));
  };

  const registerUserInputsModel: IInputsToRender<IUser>[] = [
    {
      type: 'default',
      label: 'Nome Completo',
      placeholder: 'Nome completo',
      name: 'name',
      onChange: handleChangeInputsValues,
      value: userModel.name,
    },
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

    const response = await postBaseRequestService<IUser>(
      userEndpoint.register,
      userModel,
    );

    if (response.status === 400)
      return toast.error('Erro ao cadastrar usuário');

    push('/login');
    return toast.success('Usuário cadastrado com sucesso!');
  };

  return {
    registerUserInputsModel,
    submitForm,
  };
}
