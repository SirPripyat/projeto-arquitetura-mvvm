'use client';

import TextField from '@/components/text-field/text-field.component';
import { Button } from '@/components/button';
import { ButtonHierarchy } from '@/enum/button-hierarchy.enum';
import React from 'react';
import useRegisterUserForm from '@/app/(public)/register/components/use-register-user-form.hook';

export default function RegisterUserForm() {
  const { registerUserInputsModel, submitForm } = useRegisterUserForm();

  return (
    <form className="flex flex-col gap-8" onSubmit={submitForm}>
      {registerUserInputsModel.map(({ ...fields }, index) => (
        <TextField key={index} {...fields} />
      ))}
      <Button.Wrapper type={'submit'} hierarchy={ButtonHierarchy.Filled}>
        Criar conta
      </Button.Wrapper>
    </form>
  );
}
