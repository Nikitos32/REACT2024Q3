import { ChangeEvent, Component, FormEvent, ReactNode } from 'react';

interface SearchProps {
  people: string;
  handlePeople: (people: string) => void;
}

type Props = Readonly<SearchProps>;

export default class Search extends Component<Props> {
  state = {
    input: '',
    error: '',
    loading: false,
  };

  setRequestToLS = (request: string) => {
    localStorage.setItem('lastRequest', request);
  };

  fetchData = (request: string) => {
    fetch(request)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.props.handlePeople(JSON.stringify(data));
        this.setState({ loading: false });
      });
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    this.setState({ loading: true });
    this.setRequestToLS(
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
    this.setState({ loading: true });
    if (localStorage.getItem('lastRequest')) {
      this.fetchData(`${localStorage.getItem('lastRequest')}`);
    } else {
      this.fetchData(
        `https://swapi.dev/api/people/?search=${this.state.input}`
      );
    }
  }

  render(): ReactNode {
    if (this.state.error) throw new Error();
    if (this.state.loading) {
      return <p>Loading...</p>;
    } else
      return (
        <div>
          <form onSubmit={(e: FormEvent) => this.handleSubmit(e)}>
            <input
              type="search"
              placeholder="Search ..."
              onChange={(e: ChangeEvent) => this.handleInput(e)}
              required={true}
            />
            <button type="submit">Search</button>
            <button
              type="button"
              onClick={() => {
                this.fetchData(`https://swapi.dev/api/people/`);
                this.setRequestToLS(`https://swapi.dev/api/people/`);
              }}
            >
              reset
            </button>
          </form>
          <button onClick={() => this.setState({ error: 'yes' })}>
            Throw an error
          </button>
        </div>
      );
  }
}
