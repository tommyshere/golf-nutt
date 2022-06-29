import { Component, Input, OnInit } from '@angular/core';
import { AdminUserDetail } from '../../../interface';

@Component({
  selector: 'app-game-player-detail',
  templateUrl: './game-player-detail.component.html',
  styleUrls: ['./game-player-detail.component.scss'],
})
export class GamePlayerDetailComponent implements OnInit {
  @Input() playerAdminDetails!: AdminUserDetail[];
  public displayedColumns: string[] = ['name', 'paid'];

  constructor() {}

  ngOnInit(): void {}
}
