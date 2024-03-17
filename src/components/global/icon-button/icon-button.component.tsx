import { ElementType } from 'react';

interface IconButtonProps {
  icon: ElementType;
  onClick: () => void;
}

export default function IconButton({ icon: Icon, onClick }: IconButtonProps) {
  return (
    <button
      className={
        'text-cyan-500 hover:bg-cyan-500/10 flex items-center justify-center'
      }
      onClick={onClick}
    >
      <Icon className={'h-4 w-4'} />
    </button>
  );
}
