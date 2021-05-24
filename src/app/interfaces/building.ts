import city from './city';

export default interface Building {
  appartementId?: string;
  superficie: number;
  energie: string;
  type: string;
  nbDePieces: number;
  villeId: number;
  ville?: city;
}
