export interface SelectedItem {
  selected: number;
}

export interface ResultPeople {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
  created: string;
  skin_color?: string;
  eye_color?: string;
  gender?: string;
  films?: string[];
}

export interface ItemListProps {
  results: ResultPeople[];
}

export interface selectedState {
  value: string[];
}
