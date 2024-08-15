import { MainPage } from '@/app/myPages/MainPage';
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
  return (
    <>
      <MainPage params={params.slug} />
    </>
  );
}
