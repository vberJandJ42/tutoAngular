import building from './building';

export default interface City {
  villeId?: string;
  nom: string;
  codePostal: number;
  appartements?: {
    [key: string]: building
  }
}
