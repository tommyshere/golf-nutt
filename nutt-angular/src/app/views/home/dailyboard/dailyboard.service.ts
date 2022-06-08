import { Injectable } from '@angular/core';
import { PlayerDetail } from '../../../interface';
import { Observable, of } from 'rxjs';
import { myData, otherPlayerData } from './data';

@Injectable()
export class DailyboardService {
  constructor() {}

  public getMyDailyScore(): Observable<PlayerDetail> {
    return of(myData);
  }

  public getOtherPlayerDetails(): Observable<PlayerDetail[]> {
    return of(otherPlayerData);
  }

  public postUserGuess(data: any) {
    console.log(data);
  }
}
