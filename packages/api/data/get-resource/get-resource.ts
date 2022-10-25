import axios from 'axios';
import { apiUrl } from '../../constants';

export type People = {
  name?: string;
  height?: string;
  mass?: string;
  hair_color?: string;
  skin_color?: string;
  eye_color?: string;
  birth_year?: string;
  gender?: string;
  homeworld?: string;
  films?: string[];
  species?: string[];
  vehicles?: string[];
  starships?: string[];
  created?: string;
  edited?: string;
  url?: string;
};

export type Planet = {
  name?: string;
  rotation_period?: string;
  orbital_period?: string;
  diameter?: string;
  climate?: string;
  gravity?: string;
  terrain?: string;
  surface_water?: string;
  population?: string;
  residents?: string[];
  films?: string[];
  created?: string;
  edited?: string;
  url?: string;
};

export type Film = {
  title?: string;
  episode_id?: string;
  opening_crawl?: string;
  director?: string;
  producer?: string;
  release_date?: string;
  characters?: string[];
  planets?: string[];
  starships?: string[];
  vehicles?: string[];
  species?: string[];
  created?: string;
  edited?: string;
  url?: string;
};

export type Specie = {
  name?: string;
  classification?: string;
  designation?: string;
  average_height?: string;
  skin_colors?: string;
  hair_colors?: string;
  eye_colors?: string;
  average_lifespan?: string;
  homeworld?: string;
  language?: string;
  people?: string[];
  films?: string[];
  created?: string;
  edited?: string;
  url?: string;
};

export type Vehicle = {
  name?: string;
  model?: string;
  manufacturer?: string;
  cost_in_credits?: string;
  length?: string;
  max_atmosphering_speed?: string;
  crew?: string;
  passengers?: string;
  cargo_capacity?: string;
  consumables?: string;
  vehicle_class?: string;
  pilots?: string[];
  films?: string[];
  created?: string;
  edited?: string;
  url?: string;
};

export type Starship = {
  name?: string;
  model?: string;
  manufacturer?: string;
  cost_in_credits?: string;
  length?: string;
  max_atmosphering_speed?: string;
  crew?: string;
  passengers?: string;
  cargo_capacity?: string;
  consumables?: string;
  hyperdrive_rating?: string;
  MGLT?: string;
  starship_class?: string;
  pilots?: string[];
  films?: string[];
  created?: string;
  edited?: string;
  url?: string;
};

export type Entity = People & Planet & Film & Specie & Vehicle & Starship;

export type Resource<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export async function getResource({
  resource,
}: {
  resource: string;
}): Promise<Resource<Entity>> {
  const url = apiUrl + resource;
  return (await axios.get(url)).data;
}

export async function getResourceDetails({
  resource,
  id,
}: {
  resource: string;
  id: number;
}): Promise<Entity> {
  const url = apiUrl + resource + '/' + id;
  return (await axios.get(url)).data;
}
