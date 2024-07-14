interface ItemProps {
  name: string;
  height: string;
  mass: string;
  birthYear: string;
}

export const Item = ({ name, height, mass, birthYear }: ItemProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Birth Year: {birthYear}</p>
    </div>
  );
};
