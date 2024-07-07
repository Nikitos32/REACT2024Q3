import { ChangeEvent, Component, FormEvent, ReactNode } from 'react';

export default class Search extends Component {
  state = {
    input: '',
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  handleInput = (e: ChangeEvent) => {
    this.setState({
      input: (e.target as HTMLInputElement).value,
    });
  };

  render(): ReactNode {
    return (
      <form onSubmit={(e: FormEvent) => this.handleSubmit(e)}>
        <input
          type="search"
          placeholder="Search ..."
          onChange={(e: ChangeEvent) => this.handleInput(e)}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
