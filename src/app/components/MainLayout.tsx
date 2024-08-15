'use client';

import { useContext } from 'react';
import { ThemeContext } from './App';
import classNames from 'classnames';

export const MainLayout = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <header
        className={classNames(
          theme.theme === 'dark' ? 'text-gray-500 bg-gray-900' : '',
          'flex pl-2 justify-start items-center w-full h-10'
        )}
      >
        <button
          aria-label="Set dark"
          className={classNames(
            theme.theme === 'dark'
              ? 'text-gray-500 bg-gray-900 border-gray-500'
              : '',
            'border border-black p-1 rounded-sm hover:shadow-[1px_1px_4px]'
          )}
          onClick={() => theme.toggleTheme()}
        >
          Set{'\n'}
          {theme.theme === 'light' ? 'dark' : 'light'}
        </button>
      </header>
    </>
  );
};
