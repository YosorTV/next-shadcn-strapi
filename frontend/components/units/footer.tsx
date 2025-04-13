import { FC } from 'react';

import { IFooter } from '@/lib/interfaces/units/footer';

const Footer: FC<IFooter> = () => {
  return <footer className='fixed bottom-0 flex min-h-20' />;
};

export default Footer;
