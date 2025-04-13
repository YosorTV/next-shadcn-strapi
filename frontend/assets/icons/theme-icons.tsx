import { Sun, Moon } from 'lucide-react';

const ThemeIcons = () => {
  return (
    <>
      <Sun className='h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
      <Moon className='absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
      <span className='sr-only'>Toggle theme</span>
    </>
  );
};

export default ThemeIcons;
