import { Component, ReactNode } from 'react';
import Search from './components/Search';

export default class App extends Component {
  state = {
    starWarsPeople: '',
  };

  handlePeople = (people: string) => {
    this.setState({
      starWarsPeople: people,
    });
  };

  render(): ReactNode {
    return (
      <Search
        people={this.state.starWarsPeople}
        handlePeople={this.handlePeople}
      />
    );
  }
}
