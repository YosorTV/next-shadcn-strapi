'use client';

import Dropdown from '@/components/elements/dropdown';
import useTheme from '@/lib/hooks/useTheme';
import ThemeIcons from '@/assets/icons/theme-icons';

const ThemeChanger = () => {
  const { themes } = useTheme();

  return <Dropdown content={<ThemeIcons />} menuItems={themes} triggerVariant='outline' triggerSize='icon' />;
};

export default ThemeChanger;
