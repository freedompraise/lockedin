'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/DropdownMenu';
import { Button } from '@/components/ui/Button';
import { Icons } from '@/components/Icons';
import { useTheme } from 'next-themes';

export const ThemeDropDownMenu = () => {
  const { setTheme } = useTheme();

  return (
    <div className="mr-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <Icons.Sun
              size={22}
              className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
            <Icons.Moon
              size={22}
              className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="bg-background dark:bg-gray-800 border border-border rounded-md shadow-lg shadow-gray-900/50 z-[1000] opacity-95 h-48 py-2"
        >
          <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
