import { useTheme as useNextTheme } from 'next-themes';
import { useMemo } from 'react';
import { THEMES as NEXT_THEMES } from '@/lib/constants/themes';

const useTheme = () => {
  const { setTheme, theme, systemTheme } = useNextTheme();

  const themes = useMemo(() => {
    return NEXT_THEMES.map((theme) => ({
      label: theme,
      onClick: () => setTheme(theme),
    }));
  }, [setTheme]);

  return { themes, theme, systemTheme };
};

export default useTheme;
