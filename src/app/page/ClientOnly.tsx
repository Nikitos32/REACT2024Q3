'use client';

import dynamic from 'next/dynamic';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import React from 'react';

const App = dynamic(() => import('../components/App'), { ssr: false });

export function ClientOnly() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
