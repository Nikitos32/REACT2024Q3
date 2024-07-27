import { Item } from './Item';

interface ResultPeople {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
  created: string;
}

interface ItemListProps {
  results: ResultPeople[];
}

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
            <p className="flex absolute top-1/2 left-1/2 justify-center">
              No results
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
