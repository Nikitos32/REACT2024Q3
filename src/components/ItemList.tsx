import { Component, ReactNode } from 'react';
import Item from './Item';

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

type Props = Readonly<ItemListProps>;

export default class ItemList extends Component<Props> {
  render(): ReactNode {
    return (
      <>
        <h1>Results: </h1>
        {this.props.results &&
          this.props.results.map((elem) => {
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
  }
}
