import { Component, ReactNode } from 'react';

interface ItemProps {
  name: string;
  height: string;
  mass: string;
  birthYear: string;
}

type Props = Readonly<ItemProps>;

export default class Item extends Component<Props> {
  render(): ReactNode {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>Height: {this.props.height}</p>
        <p>Mass: {this.props.mass}</p>
        <p>Birth Year: {this.props.birthYear}</p>
      </div>
    );
  }
}
