import { InputsComponentsTypes } from '@/types/inputs-components-types.type';

export interface IInputsToRender<T> {
  type: InputsComponentsTypes;
  label: string;
  placeholder: string;
  name: string;
  onChange: (eventValues: any) => void;
  value: T[keyof T];
}
