import { PlayerDetail } from '../../../interface';

const DATA = [
  {
    golferName: 'Scottie Scheffler',
    golferScore: -1,
    playerGuess: 2,
    playerScore: 3,
  },
  {
    golferName: 'Cameron Smith',
    golferScore: 1,
    playerGuess: -2,
    playerScore: 3,
  },
  {
    golferName: 'Sungjae Im',
    golferScore: 3,
    playerGuess: 1,
    playerScore: 2,
  },
  {
    golferName: 'Shane Lowry',
    golferScore: -3,
    playerGuess: -1,
    playerScore: 2,
  },
  {
    golferName: 'Charl Schwartzel',
    golferScore: 2,
    playerGuess: 1,
    playerScore: 1,
  },
  {
    golferName: 'Justin Thomas',
    golferScore: 0,
    playerGuess: 1,
    playerScore: 1,
  },
  {
    golferName: 'Corey Conners',
    golferScore: -2,
    playerGuess: 2,
    playerScore: 9,
  },
  {
    golferName: 'Danny Willet',
    golferScore: 1,
    playerGuess: 2,
    playerScore: 1,
  },
  {
    golferName: 'Jason Kokrak',
    golferScore: 1,
    playerGuess: -3,
    playerScore: 9,
  },
  {
    golferName: 'Dustin Johnson',
    golferScore: 0,
    playerGuess: 0,
    playerScore: -10,
  },
];

export const myData: PlayerDetail = {
  name: 'Brooks DuBose',
  dailyScore: 21,
  overallScore: 21,
  playDetails: DATA,
};

export const otherPlayerData: PlayerDetail[] = [
  {
    name: 'Robert Wylie',
    dailyScore: -6,
    overallScore: -6,
    playDetails: DATA,
  },
  {
    name: 'Scott Strickland',
    dailyScore: 0,
    overallScore: 0,
    playDetails: DATA,
  },
];
