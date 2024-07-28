import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { useNavigate, useParams } from 'react-router-dom';
import { ItemListProps, ResultPeople } from '../constants/interfaces';

export const MyModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [person, setPerson] = useState<ResultPeople>();
  const params = useParams();
  const navigate = useNavigate();

  const fetchPerson = async () => {
    const data: ItemListProps = await fetch(
      `https://swapi.dev/api/people/?search=${params.name}`
    ).then((data) => {
      return data.json();
    });
    setPerson(data.results[0]);
  };

  useEffect(() => {
    setIsOpen(true);
    fetchPerson();
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    navigate('..');
  };

  return (
    <ReactModal
      className="w-1/3 h-1/3 top-1/3 left-1/3 absolute p-2 brightness-100"
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <div className="h-full border-2 rounded-md flex-col border-black p-2 gap-5 bg-white flex">
        <div className="flex">
          <p className="w-full flex justify-center font-semibold text-2xl">
            {params.name}
          </p>
          <button
            type="button"
            className="border p-1 h-6 flex justify-center items-center w-6 border-black rounded-md hover:shadow-[1px_1px_5px]"
            onClick={closeModal}
          >
            X
          </button>
        </div>
        <div className="flex flex-col gap-2 h-full justify-center">
          <p>
            <span className="font-semibold">Eye color: </span>
            {person?.eye_color}
          </p>
          <p>
            <span className="font-semibold">Gender:</span> {person?.gender}
          </p>
          <p>
            <span className="font-semibold">Skin color:</span>{' '}
            {person?.skin_color}
          </p>
          <p>
            <span className="font-semibold">Amount films:</span>{' '}
            {person?.films?.length}
          </p>
        </div>
      </div>
    </ReactModal>
  );
};
