import { Group } from './group';

export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  groups: Group[];
}
