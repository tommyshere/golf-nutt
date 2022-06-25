import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { Subscription } from 'rxjs';
import { Game } from '../../interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  private _rx!: Subscription;
  public game!: Game;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this._rx = this.adminService.getGames().subscribe(data => {
      this.game = data[0];
    });
  }
}
