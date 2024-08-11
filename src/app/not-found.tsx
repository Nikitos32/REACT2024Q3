'use client';

import classNames from 'classnames';
import { useContext } from 'react';
import { MdReportGmailerrorred } from 'react-icons/md';
import { ThemeContext } from './components/App';

export default function ErrorPage() {
  const theme = useContext(ThemeContext);
  return (
    <p
      className={classNames(
        theme.theme === 'dark'
          ? 'text-gray-500 bg-gray-900 border-gray-500'
          : 'text-red-500',
        'flex justify-center flex-col gap-4 items-center h-full text-2xl font-bold'
      )}
    >
      404 PAGE NOT FOUND <MdReportGmailerrorred size={75} />
    </p>
  );
}
