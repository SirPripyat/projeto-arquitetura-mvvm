import Input from "@/components/input/input.component";

interface TextFieldProps {
  label: string;
  placeholder: string;
}

// object = {
//   [text]: <Input />
// [password]: <InputPassword />

export default function TextField({ label, placeholder }: TextFieldProps) {
  return (
    <>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-white">{label}</label>
        <Input placeholder={placeholder} />
      </div>
    </>
  );
}
