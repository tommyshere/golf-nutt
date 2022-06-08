import { Component, Input, OnInit } from '@angular/core';
import { PlayerDetail } from '../../../../interface';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss'],
})
export class PlayerDetailsComponent implements OnInit {
  @Input() details!: PlayerDetail[];

  constructor() {}

  ngOnInit(): void {}
}
