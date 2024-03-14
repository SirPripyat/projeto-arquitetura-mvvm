import {InputProps} from "@/interfaces/input.interface";

export default function Input({...props}: InputProps) {
  return (
    <input
      {...props}
      className="w-full px-3 py-2 pr-10 border border-slate-800 rounded-md bg-transparent text-gray-50"
    />
  );
}
