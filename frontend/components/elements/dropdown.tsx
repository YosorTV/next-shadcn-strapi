'use client';

import { FC } from 'react';

import { Button } from '@/components/elements/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/elements/dropdown-menu';
import { IDropdown } from '@/lib/interfaces/elements/dropdown';

const Dropdown: FC<IDropdown> = ({
  content,
  menuItems,
  align = 'center',
  triggerVariant = 'outline',
  triggerSize = 'default',
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={triggerVariant} size={triggerSize}>
          {content}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align} className='uppercase'>
        {menuItems.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <DropdownMenuItem key={index} onClick={item.onClick}>
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
