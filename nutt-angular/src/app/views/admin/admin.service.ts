import { Injectable } from '@angular/core';
import { Game } from '../../interface';
import { of, Observable } from 'rxjs';
import { games } from './data';

@Injectable()
export class AdminService {
  constructor() {}

  public getGames(): Observable<Game[]> {
    return of(games);
  }
}
