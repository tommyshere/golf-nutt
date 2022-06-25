import { Game } from '../../interface';

export const games: Game[] = [
  {
    _id: '0',
    name: 'The Game',
    pgaMatch: 'The Masters Tournament',
    players: [
      {
        _id: '0',
        user: 'Brooks DuBose',
        paid: true,
      },
      {
        _id: '1',
        user: 'Jody Lyles',
        paid: false,
      },
      {
        _id: '2',
        user: 'Scott Strickland',
        paid: true,
      },
    ],
  },
];
