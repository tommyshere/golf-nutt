import { Injectable } from '@angular/core';
import { Game } from '../../interface';
import { of, Observable } from 'rxjs';
import { game } from './data';

@Injectable()
export class AdminService {
  constructor() {}

  public getGame(): Observable<Game> {
    return of(game);
  }
}
