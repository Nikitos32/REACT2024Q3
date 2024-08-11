import { useContext } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { clearStore } from '../../reducers/selectedItemsSlice';
import { ThemeContext } from '../App';
import classNames from 'classnames';

export const Flyout = () => {
  const count = useAppSelector((state) => state.selectedItems.value);
  const theme = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const handleUnselectAll = () => {
    dispatch(clearStore());
  };

  const handleContentFile = () => {
    const res: string = count.reduce((current, elem) => {
      return (current += `Name:${elem}\nUrl: https://swapi.dev/api/people/?search=${elem.split(' ').join('%')}\n`);
    }, '');
    return res;
  };
  const res: string = handleContentFile();

  const data = new Blob([res], {
      type: 'text/csv',
    }),
    csvURL = window.URL.createObjectURL(data);

  return (
    <>
      <div
        className={
          count.length > 0
            ? `top-3/4 left-3/4 absolute p-5 w-1/4 h-1/4 flex items-end transition-all delay-150 opacity-1`
            : 'top-3/4 left-3/4 overflow-hidden absolute w-0 h-0 transition-all delay-150 opacity-0'
        }
      >
        <div
          className={classNames(
            theme.theme === 'dark' &&
              'text-gray-500 bg-gray-900 border-gray-500',
            `border p-2 rounded-xl border-black w-full h-2/3 flex flex-col justify-between gap-1`
          )}
        >
          <p className="text-sm flex justify-center font-semibold">Store</p>
          <div className="flex gap-3 h-full items-end">
            <a
              href={csvURL}
              download={`${count.length}_star_wars_people.csv`}
              className={classNames(
                theme.theme === 'dark' && ' border-gray-500',
                'flex justify-center hover:bg-orange-400 hover:text-white transition-all ease-in-out duration-500 hover:cursor-pointer w-1/2 h-full border rounded-md border-black hover:shadow-[1px_1px_4px]'
              )}
            >
              Save .CSV
            </a>
            <button
              className={classNames(
                theme.theme === 'dark'
                  ? ' border-gray-500 text-orange-400'
                  : 'text-red-600',
                'hover:bg-orange-400 hover:text-white transition-all ease-in-out duration-500 w-1/2 h-full border rounded-md font-semibold  border-black hover:shadow-[1px_1px_2px]'
              )}
              onClick={() => handleUnselectAll()}
            >
              Unselect All
            </button>
          </div>
          <p className="flex gap-2">
            <span className="font-bold">Selected Items Now:</span>
            {count.length}
          </p>
        </div>
      </div>
    </>
  );
};
