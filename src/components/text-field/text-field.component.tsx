import {InputProps} from "@/interfaces/input.interface";
import {InputsComponentsTypes} from "@/types/inputs-components-types.type";
import useTextField from "@/components/text-field/use-text-field.hook";

interface TextFieldProps extends InputProps {
  label: string;
  type: InputsComponentsTypes;
}

export default function TextField({label, type, ...otherProps}: TextFieldProps) {

  const {findOutWhatInputToRender} = useTextField({...otherProps});

  return (
    <>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-300 placeholder:text-gray-600">{label}</label>
        {
          findOutWhatInputToRender[type]
        }
      </div>
    </>
  );
}
