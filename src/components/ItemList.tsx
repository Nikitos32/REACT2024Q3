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
    <>
      <h1>Results: </h1>
      {results &&
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
        })}
    </>
  );
};
