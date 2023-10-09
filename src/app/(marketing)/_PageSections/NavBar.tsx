'use client';

import { useState } from 'react';
import Link from 'next/link';

import { NavItem } from '@/lib/types/types';
import { cn } from '@/lib/utils/helpers';
import { Icons } from '@/components/Icons';
import MobileNav from './MobileNavMain';

interface NavbarMainProps {
  items?: NavItem[];
  children?: React.ReactNode;
}

const NavbarMain = ({ items, children }: NavbarMainProps) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="flex gap-6 md:gap-10">
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className={cn(
                'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.Close /> : <Icons.Logo />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && <MobileNav items={items}>{children}</MobileNav>}
    </div>
  );
};

export default NavbarMain;
