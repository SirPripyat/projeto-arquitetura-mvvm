import {InputsComponentsTypes} from "@/types/inputs-components-types.type";

export interface RegisterUserInputsModel {
  type: InputsComponentsTypes;
  label: string;
  placeholder: string;
  name: string;
  onChange: (eventValues: any) => void;
}