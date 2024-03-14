import {HTMLAttributes, ReactNode} from "react";
import {ButtonHierarchy} from "@/enum/button-hierarchy.enum";
import "./button-wrapper.styles.css"
import useButtonWrapper from "@/components/button/use-button-wrapper.hook";

interface ButtonWrapperProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  hierarchy: ButtonHierarchy
  type: "submit" | "button" | "reset"
}

export default function ButtonWrapper({
                                        children,
                                        hierarchy,
                                        ...otherButtonProps
                                      }: ButtonWrapperProps) {

  const {findOutWhatHierarchyToSet} = useButtonWrapper()

  const getButtonStyles = findOutWhatHierarchyToSet[hierarchy]

  return <button className={getButtonStyles} {...otherButtonProps}>
    {children}
  </button>
}