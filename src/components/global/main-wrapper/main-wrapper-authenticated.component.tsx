import { IMainWrapper } from '@/interfaces/main-wrapper.interface';

interface MainWrapperAuthenticatedProps extends IMainWrapper {}

export default function MainWrapperAuthenticated({
  children,
}: MainWrapperAuthenticatedProps) {
  return (
    <main className={'bg-slate-950 flex flex-col gap-8 px-28 py-14 min-h-dvh'}>
      {children}
    </main>
  );
}
