'use client';

import LangIcons from '@/assets/icons/lang-icons';
import Dropdown from '@/components/elements/dropdown';
import useLocale from '@/lib/hooks/useLocale';

const LangChanger = () => {
  const { locales } = useLocale();

  return <Dropdown content={<LangIcons />} menuItems={locales} triggerVariant='outline' triggerSize='icon' />;
};

export default LangChanger;
