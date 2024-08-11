import { MainPage } from '@/app/myPages/MainPage';
import classNames from 'classnames';
import React from 'react';

export function generateStaticParams() {
  return [
    { slug: '1' },
    { slug: '2' },
    { slug: '3' },
    { slug: '4' },
    { slug: '5' },
    { slug: '6' },
    { slug: '7' },
    { slug: '8' },
  ];
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const theme = 'dark';
  return (
    <>
      <header
        className={classNames(
          theme === 'dark' ? 'text-gray-500 bg-gray-900' : '',
          'flex pl-2 justify-start items-center w-full h-10'
        )}
      >
        <button
          aria-label="Set dark"
          className={classNames(
            theme === 'dark' ? 'text-gray-500 bg-gray-900 border-gray-500' : '',
            'border border-black p-1 rounded-sm hover:shadow-[1px_1px_4px]'
          )}
        >
          Set{'\n'}
          {theme === 'dark' ? 'dark' : 'light'}
        </button>
      </header>
      <MainPage params={params.slug} />
    </>
  );
}
