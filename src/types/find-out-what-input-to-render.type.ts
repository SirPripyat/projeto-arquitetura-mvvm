import React from 'react';
import { InputsComponentsTypes } from '@/types/inputs-components-types.type';

export type FindOutWhatInputToRender = {
  [key in keyof InputsComponentsTypes]: React.JSX.Element;
};
