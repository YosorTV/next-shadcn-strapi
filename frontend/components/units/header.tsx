import { FC } from 'react';

import Logo from '@/components/elements/logo';
import { IHeader } from '@/lib/interfaces/units/header';
import ThemeChanger from '@/units/theme-changer';
import LangChanger from '@/units/lang-changer';

const Header: FC<IHeader> = () => {
  return (
    <header className='absolute top-10 z-50 flex w-full max-w-screen-xl items-center justify-between'>
      <Logo />
      <div className='flex items-center gap-2'>
        <LangChanger />
        <ThemeChanger />
      </div>
    </header>
  );
};

export default Header;
