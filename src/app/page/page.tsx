import { Provider } from 'react-redux';
import { ClientOnly } from './ClientOnly';

import React from 'react';
import { store } from '../store/store';

export default function Page() {
  return (
    <Provider store={store}>
      <ClientOnly />
    </Provider>
  );
}
