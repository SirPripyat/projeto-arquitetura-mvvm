'use client';

import { Button } from '../../../../components/global/button';
import { ButtonHierarchy } from '@/enum/button-hierarchy.enum';
import React from 'react';
import useLoginUserForm from '@/app/(public)/login/components/use-login-user-form.hook';
import TextField from '@/components/global/text-field/text-field.component';

export default function LoginUserForm() {
  const { loginUserInputsModel, submitForm, buttonDisabled } =
    useLoginUserForm();

  return (
    <form className="flex flex-col gap-8" onSubmit={submitForm}>
      {loginUserInputsModel.map(({ ...fields }, index) => (
        <TextField key={index} {...fields} />
      ))}

      <Button.Wrapper
        disabled={buttonDisabled}
        type={'submit'}
        hierarchy={ButtonHierarchy.Filled}
      >
        Login
      </Button.Wrapper>
    </form>
  );
}
