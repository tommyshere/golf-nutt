import { Component, OnInit, Input } from '@angular/core';
import { OverallIndScore } from '../../../../interface';

@Component({
  selector: 'app-leaderboard-table',
  templateUrl: './leaderboard-table.component.html',
  styleUrls: ['./leaderboard-table.component.scss'],
})
export class LeaderboardTableComponent implements OnInit {
  @Input() leaderboard!: OverallIndScore[];
  public displayedColumns: string[] = [
    'name',
    'thursday',
    'friday',
    'saturday',
    'sunday',
    'overall',
  ];

  constructor() {}

  ngOnInit(): void {}
}
