interface ButtonIconProps {
  icon: React.ElementType;
}

export default function ButtonIcon({ icon: Icon }: ButtonIconProps) {
  return <Icon className={'w-4 h-4'} />;
}
