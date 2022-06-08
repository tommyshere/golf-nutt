import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OverallIndScore } from '../../../interface';
import { LeaderboardService } from './leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent implements OnInit {
  private _rx!: Subscription;
  public leaderboard!: OverallIndScore[];

  constructor(private leaderboardService: LeaderboardService) {}

  ngOnInit(): void {
    this._rx = this.leaderboardService.getLeaderboard().subscribe(data => {
      this.leaderboard = data;
    });
  }
}
