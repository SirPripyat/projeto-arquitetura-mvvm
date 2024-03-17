'use client';

import { PROJECT_NAME } from '@/constants/project-name.constant';
import useLogoClick from '@/components/global/logo/use-logo-click.hook';

export default function LogoSmall() {
  const { clickToHomePage } = useLogoClick();

  return (
    <h6
      onClick={clickToHomePage}
      className={'font-bold text-gray-50 text-center'}
    >
      {PROJECT_NAME}
    </h6>
  );
}
