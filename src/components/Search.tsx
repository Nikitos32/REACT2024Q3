import { ChangeEvent, Component, FormEvent, ReactNode } from 'react';

interface SearchProps {
  people: string;
  handlePeople: (people: string) => void;
}

type Props = Readonly<SearchProps>;

export default class Search extends Component<Props> {
  state = {
    input: '',
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetch(`https://swapi.dev/api/people/?search=${this.state.input}`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.props.handlePeople(JSON.stringify(data));
      });
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
        <p>{this.props.people}</p>
      </form>
    );
  }
}
