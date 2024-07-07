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

  fetchData = (request: string) => {
    fetch(request)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.props.handlePeople(JSON.stringify(data));
      });
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    localStorage.setItem(
      'lastRequest',
      `https://swapi.dev/api/people/?search=${this.state.input}`
    );
    this.fetchData(`https://swapi.dev/api/people/?search=${this.state.input}`);
  };

  handleInput = (e: ChangeEvent) => {
    this.setState({
      input: (e.target as HTMLInputElement).value,
    });
  };

  componentDidMount(): void {
    if (localStorage.getItem('lastRequest')) {
      this.fetchData(`${localStorage.getItem('lastRequest')}`);
    }
  }

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
