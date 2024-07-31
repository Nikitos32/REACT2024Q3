import { AiFillExclamationCircle } from 'react-icons/ai';
import { Item } from './Item';
import { ItemListProps } from '../constants/interfaces';
import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../App';

export const ItemList = ({ results }: ItemListProps) => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={classNames(
        theme.theme === 'dark' && 'text-gray-500 bg-gray-900 border-gray-500',
        'flex p-5 gap-5 flex-col grow'
      )}
    >
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-2xl">Results: </h1>
        <div className="flex flex-wrap gap-5">
          {results.length > 0 ? (
            results.map((elem) => {
              return (
                <Item
                  key={elem.created}
                  name={elem.name}
                  height={elem.height}
                  mass={elem.mass}
                  birthYear={elem.birth_year}
                />
              );
            })
          ) : (
            <p className="flex justify-center text-xl items-center gap-2">
              No results <AiFillExclamationCircle className="text-red-500" />
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
