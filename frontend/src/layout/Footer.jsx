import React from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';

const Link = ({ children, ...props }) => (
  <a
    {...props}
    className="inline-flex items-end gap-px 
               text-neutral-600 dark:text-neutral-400 
               hover:text-neutral-900 active:text-neutral-900 
               hover:dark:text-neutral-200 active:dark:text-neutral-200"
    target="_blank"
    rel={props.rel || 'noreferrer'}
  >
    {children}
  </a>
);

const ArrowIcon = () => <ArrowUpRight size="1em" className="text-xs" />;

export function Footer() {
  return (
    <div className="border-t w-full 
                    border-neutral-300/30 dark:border-neutral-900 py-8">
      <div className="max-w-6xl m-auto flex items-center leading-none md:justify-between">
        <div className="hidden gap-4 
                        text-neutral-500 dark:text-neutral-400 
                        md:flex">
          <Link
            href="https://github.com/princepatel4423d"
            rel="license"
          >
            <span>License</span>
            <ArrowIcon />
          </Link>
          <Link
            href="https://github.com/princepatel4423d"
            rel="external"
          >
            <span>Github</span>
            <ArrowIcon />
          </Link>
        </div>
        <div className="text-center text-sm 
                        text-neutral-500 dark:text-neutral-400 
                        md:text-right">
          Built with{' '}
          <Link href="https://react.dev/" rel="external">
            React.js
          </Link>
          ,{' '}
          <Link href="https://ui.shadcn.com/" rel="external">
            Sadcn
          </Link>
          ,{' '}
          <Link href="https://tailwindcss.com/" rel="external">
            Tailwindcss
          </Link>{' '}
          and{' '}
          <Link href="https://vite.dev/" rel="external">
            Vite
          </Link>{' '}
          by{' '}
          <Link href="/" rel="external">
            Prince Patel
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
