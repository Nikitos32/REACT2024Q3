import { ChangeEvent, useContext } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { selectItem, unselectItem } from '../reducers/selectedItemsSlice';
import { ThemeContext } from './App';
import classNames from 'classnames';
import Link from 'next/link';

interface ItemProps {
  name: string;
  height: string;
  mass: string;
  birthYear: string;
}

export const Item = ({ name, height, mass, birthYear }: ItemProps) => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.selectedItems.value);
  const theme = useContext(ThemeContext);

  const handleSelect = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.checked) {
      dispatch(selectItem(target.value));
    } else {
      dispatch(unselectItem(target.value));
    }
  };

  return (
    <div
      className={classNames(
        theme.theme === 'dark' && 'text-gray-500 bg-gray-900 border-gray-500',
        'flex flex-col gap-1 w-60 border rounded-md border-black p-2 hover:shadow-[1px_1px_2px]'
      )}
    >
      <h2 className="font-semibold flex justify-center">{name}</h2>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Birth Year: {birthYear}</p>
      <div className="flex justify-between items-center">
        <Link replace={true} href={`./details/${name}`}>
          <button
            className={classNames(
              theme.theme === 'dark' && 'border-gray-500',
              'border p-1 border-black rounded-sm hover:shadow-[1px_1px_2px] hover:bg-orange-400 hover:text-white transition-all ease-in-out duration-500'
            )}
          >
            Show Details
          </button>
        </Link>
        <label
          className="cursor-pointer select-none"
          htmlFor={`checkbox_${name}`}
        >
          Add to Store
        </label>
        <input
          checked={count.includes(name)}
          onChange={(event: ChangeEvent) => handleSelect(event)}
          value={name}
          className="cursor-pointer"
          id={`checkbox_${name}`}
          type="checkbox"
        />
      </div>
    </div>
  );
};
