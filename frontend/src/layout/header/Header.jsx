import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { DesktopTheme } from './DesktopTheme';
import { MobileMenu } from './mobilemenu/MobileMenu';
import { Search } from './Search';

const MenuItem = ({ name, path }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const isHome = path === '/';
  const isActive = isHome ? path === pathname : pathname.startsWith(path);

  return (
    <NavLink
      to={path}
      data-active={isActive}
      className="rounded-lg p-2 leading-none text-neutral-500 
                 data-[active='true']:text-neutral-900 
                 hover:bg-neutral-200/50 
                 hover:text-neutral-900 
                 dark:text-neutral-400 
                 data-[active='true']:dark:text-neutral-100 
                 hover:dark:bg-neutral-900/50 
                 dark:hover:text-neutral-100"
    >
      {name}
    </NavLink>
  );
};

export function Header() {
  return (
    <header className="top-0 z-40 w-full p-3">
      <div className="content-container flex items-center justify-between rounded-xl 
                      border border-neutral-200/50 bg-neutral-50/80 
                      p-0 backdrop-blur-3xl transition-all 
                      dark:border-neutral-800 dark:bg-neutral-950/80 md:px-5">
        <NavLink
          to="/"
          className="px-4 py-3 font-handwrite text-2xl font-bold drop-shadow-lg md:px-0 
                     text-neutral-900 dark:text-neutral-100"
        >
          Prince P.
        </NavLink>
        <div className="hidden w-full items-center gap-8 md:flex md:w-auto">
          <nav className="flex-wrap items-center justify-center gap-5">
            <MenuItem name="Home" path="/" />
            <MenuItem name="Blog" path="/blog" />
            <MenuItem name="Projects" path="/projects" />
            <MenuItem name="About" path="/about" />
            <MenuItem name="Achievements" path="/achievement" />
          </nav>
          <Search />
          <DesktopTheme />
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
