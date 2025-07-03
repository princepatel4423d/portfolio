import React from 'react';
import { useTheme } from '../../components/context/ThemeProvider'; // adjust path if needed
import { Menu } from '@headlessui/react';
import {
  Moon,
  Sun,
  Desktop,
  PaintBrushBroad,
} from '@phosphor-icons/react';

export function DesktopTheme() {
  const { setTheme, theme: currTheme } = useTheme();

  const SelectTheme = ({ theme, title }) => (
    <Menu.Item>
      {({ active }) => (
        <button
          onClick={() => setTheme(theme)}
          data-is-theme-active={currTheme === theme}
          title={title}
          className={`flex w-full items-center justify-start gap-4 rounded-xl p-2 text-lg leading-none 
            ${currTheme === theme ? 'font-bold' : ''}
            ${active ? 'bg-neutral-100 dark:bg-neutral-800' : ''}
          `}
        >
          {theme === 'light' && (
            <>
              <Sun
                size={20}
                weight={currTheme === theme ? 'duotone' : 'regular'}
              />
              <span>Light</span>
            </>
          )}
          {theme === 'dark' && (
            <>
              <Moon
                size={20}
                weight={currTheme === theme ? 'duotone' : 'regular'}
              />
              <span>Dark</span>
            </>
          )}
          {theme === 'system' && (
            <>
              <Desktop
                size={20}
                weight={currTheme === theme ? 'duotone' : 'regular'}
              />
              <span>System</span>
            </>
          )}
        </button>
      )}
    </Menu.Item>
  );

  return (
    <Menu as="div" className="relative inline-flex items-center">
      <Menu.Button
        aria-label="Change color theme"
        title="Change color theme"
        className="p-2"
      >
        <PaintBrushBroad size={20} className="text-xl" />
      </Menu.Button>
      <Menu.Items
        as="div"
        className="absolute right-0 top-10 z-10 w-48 origin-top-right rounded-xl bg-neutral-50 p-1 shadow-md outline-none dark:bg-neutral-950"
      >
        <div className="p-2 text-sm text-neutral-500">Color themes</div>
        <SelectTheme theme="light" title="Set light colors" />
        <SelectTheme theme="dark" title="Set dark colors" />
        <SelectTheme theme="system" title="Set system defined colors" />
      </Menu.Items>
    </Menu>
  );
}
