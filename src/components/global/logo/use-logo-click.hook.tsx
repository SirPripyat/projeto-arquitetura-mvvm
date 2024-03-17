import { useRouter } from 'next/navigation';

export default function useLogoClick() {
  const { push } = useRouter();

  const clickToHomePage = () => push('/');

  return {
    clickToHomePage,
  };
}
