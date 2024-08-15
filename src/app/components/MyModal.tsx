'use client';

import { useContext, useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { Loader } from './Loader';
import { useGetPersonQuery } from '../api/apiSlice';
import { ThemeContext } from './App';
import classNames from 'classnames';
import { Provider } from 'react-redux';
import { store } from '../store/store';

export const MyModal = ({ params }: { params: { title: string } }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { data: person, isLoading } = useGetPersonQuery(params.title as string);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    window.location.href = '..';
  };

  return (
    <Provider store={store}>
      {isLoading && <Loader />}
      <ReactModal
        ariaHideApp={false}
        className={classNames(
          theme.theme === 'dark' && 'text-gray-500 bg-gray-900 border-gray-500',
          'w-1/3 h-1/3 top-1/3 left-1/3 absolute p-2 brightness-100 rounded-xl'
        )}
        bodyOpenClassName={classNames(
          theme.theme === 'dark' && 'brightness-75'
        )}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div
          className={classNames(
            theme.theme === 'dark' &&
              'text-gray-500 bg-gray-900 border-gray-500',
            'h-full border-2 rounded-md flex-col border-black p-2 gap-5 bg-white flex'
          )}
        >
          <div className="flex">
            <p className="w-full flex justify-center font-semibold text-2xl">
              {params.title.split('%20').join(' ')}
            </p>
            <button
              aria-label="x"
              type="button"
              className={classNames(
                theme.theme === 'dark' && ' border-gray-500',
                'border p-1 h-6 flex justify-center items-center w-6 border-black rounded-md hover:shadow-[1px_1px_5px]'
              )}
              onClick={closeModal}
            >
              X
            </button>
          </div>
          <div className="flex flex-col gap-2 h-full justify-center">
            <p>
              <span className="font-semibold">Eye color: </span>
              {person?.results[0].eye_color}
            </p>
            <p>
              <span className="font-semibold">Gender:</span>{' '}
              {person?.results[0].gender}
            </p>
            <p>
              <span className="font-semibold">Skin color:</span>{' '}
              {person?.results[0].skin_color}
            </p>
            <p>
              <span className="font-semibold">Amount films:</span>{' '}
              {person?.results[0].films?.length}
            </p>
          </div>
        </div>
      </ReactModal>
    </Provider>
  );
};
