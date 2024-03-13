import Input from "@/components/input/input.component";

interface TextFieldProps {
  label: string;
}

// object = {
//   [text]: <Input />
// [password]: <InputPassword />

export default function TextField({label}: TextFieldProps) {
  return (
    <>
      <div>
        <label></label>
        <Input />
      </div>
    </>
  )
}