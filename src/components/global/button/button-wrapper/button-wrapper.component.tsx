import { HTMLAttributes, ReactNode } from 'react';
import { ButtonHierarchy } from '@/enum/button-hierarchy.enum';
import './button-wrapper.styles.css';
import useButtonWrapper from '@/components/global/button/button-wrapper/use-button-wrapper.hook';

interface ButtonWrapperProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  hierarchy: ButtonHierarchy;
  type: 'submit' | 'button' | 'reset';
  disabled?: boolean;
}

export default function ButtonWrapper({
  children,
  hierarchy,
  disabled,
  ...otherButtonProps
}: ButtonWrapperProps) {
  const { findOutWhatHierarchyToSet } = useButtonWrapper();

  const getButtonStyles = findOutWhatHierarchyToSet[hierarchy];

  return (
    <button
      disabled={disabled}
      className={getButtonStyles}
      {...otherButtonProps}
    >
      {children}
    </button>
  );
}
