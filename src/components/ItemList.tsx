import { AiFillExclamationCircle } from 'react-icons/ai';
import { Item } from './Item';
import { ItemListProps } from '../constants/interfaces';

export const ItemList = ({ results }: ItemListProps) => {
  return (
    <div className="flex p-5 gap-5 flex-col grow">
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
