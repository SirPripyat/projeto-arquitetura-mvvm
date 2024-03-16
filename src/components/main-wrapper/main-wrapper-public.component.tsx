import { IMainWrapper } from '@/interfaces/main-wrapper.interface';
import Image from 'next/image';
import React from 'react';

interface MainWrapperPublic extends IMainWrapper {}

export default function MainWrapperPublic({ children }: MainWrapperPublic) {
  return (
    <main
      className={
        'bg-slate-950 w-full min-h-dvh flex items-center justify-center'
      }
    >
      <Image
        src="/background.svg"
        alt="background"
        className="absolute left-1 w-1/4 opacity-30"
        width={100}
        height={100}
      />
      {children}
    </main>
  );
}
