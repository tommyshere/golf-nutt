import { AdminUserDetail } from './admin-user-detail';

export interface Game {
  _id: string;
  name: string;
  pgaMatch: string;
  players: AdminUserDetail[];
}
