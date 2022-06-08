import { PlayerScore } from './player-score';

export interface PlayerDetail {
  name: string;
  dailyScore: number;
  overallScore: number;
  playDetails: PlayerScore[];
}
