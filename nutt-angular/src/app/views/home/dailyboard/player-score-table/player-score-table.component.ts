import { Component, Input, OnInit } from '@angular/core';
import { PlayerScore } from '../../../../interface';

@Component({
  selector: 'app-player-score-table',
  templateUrl: './player-score-table.component.html',
  styleUrls: ['./player-score-table.component.scss'],
})
export class PlayerScoreTableComponent implements OnInit {
  @Input() tableData!: PlayerScore[];
  public displayedColumns: string[] = [
    'golferName',
    'golferScore',
    'playerGuess',
    'playerScore',
  ];

  constructor() {}

  ngOnInit(): void {}
}
