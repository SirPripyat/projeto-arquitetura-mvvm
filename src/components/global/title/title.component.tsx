interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return <h1 className={'font-bold text-2xl text-gray-50'}>{title}</h1>;
}
