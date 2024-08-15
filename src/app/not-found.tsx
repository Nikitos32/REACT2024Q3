'use client';

import classNames from 'classnames';
import { useContext } from 'react';
import { MdReportGmailerrorred } from 'react-icons/md';
import { ThemeContext } from './components/App';
import { permanentRedirect } from 'next/navigation';

export default function ErrorPage() {
  const theme = useContext(ThemeContext);
  setTimeout(permanentRedirect(`/page/1`), 5000);
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
