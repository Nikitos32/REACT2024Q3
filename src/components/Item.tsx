interface ItemProps {
  name: string;
  height: string;
  mass: string;
  birthYear: string;
}

export const Item = ({ name, height, mass, birthYear }: ItemProps) => {
  return (
    <div className="flex flex-col gap-1 w-52 border rounded-md border-black p-2 hover:cursor-pointer hover:shadow-[1px_2px_8px]">
      <h2 className="font-semibold flex justify-center">{name}</h2>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Birth Year: {birthYear}</p>
    </div>
  );
};
