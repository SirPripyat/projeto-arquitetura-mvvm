interface ButtonIconProps {
  icon: React.ElementType
}

export default function ButtonIcon({icon: Icon}: ButtonIconProps) {
  return (
    <>
      <Icon />
  </>
  )
}