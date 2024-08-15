'use client';

import { Provider } from 'react-redux';
import { MyModal } from '../components/MyModal';
import { store } from '../store/store';

export const ModalPage = ({ params }: { params: { title: string } }) => {
  return (
    <Provider store={store}>
      <MyModal params={params} />
    </Provider>
  );
};
