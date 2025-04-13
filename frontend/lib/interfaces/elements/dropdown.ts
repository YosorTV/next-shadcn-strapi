import { ReactNode } from 'react';

interface IMenuItem {
  label: string;
  onClick: () => void;
}

interface IDropdown {
  content: ReactNode;
  menuItems: IMenuItem[];
  align?: 'start' | 'center' | 'end';
  triggerVariant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  triggerSize?: 'default' | 'sm' | 'lg' | 'icon';
}

export type { IMenuItem, IDropdown };
