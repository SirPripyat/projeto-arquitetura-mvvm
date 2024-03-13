import React from "react";
import {ButtonHierarchy} from "@/enum/button-hierarchy.enum";
import "./button-wrapper.styles.css"
import useButtonWrapper from "@/components/button/use-button-wrapper.hook";
interface ButtonWrapperProps {
  children: React.ReactNode;
  hierarchy: ButtonHierarchy
}

export default function ButtonWrapper({children, hierarchy}: ButtonWrapperProps) {

  const { findOutWhatHierarchyToSet } = useButtonWrapper()

  const getButtonStyles = findOutWhatHierarchyToSet[hierarchy]

  return <button className={getButtonStyles}>
    {children}
  </button>
}