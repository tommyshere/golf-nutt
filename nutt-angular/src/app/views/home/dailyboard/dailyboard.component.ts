import { Component, OnInit } from '@angular/core';
import { Subscription, zip } from 'rxjs';
import { DailyboardService } from './dailyboard.service';
import { PlayerDetail } from '../../../interface';
import { MatDialog } from '@angular/material/dialog';
import { SubmitGuessFormDialogComponent } from './submit-guess-form-dialog/submit-guess-form-dialog.component';

@Component({
  selector: 'app-dailyboard',
  templateUrl: './dailyboard.component.html',
  styleUrls: ['./dailyboard.component.scss'],
})
export class DailyboardComponent implements OnInit {
  private _rx!: Subscription;
  public myData!: PlayerDetail;
  public otherPlayerDetails!: PlayerDetail[];

  constructor(private dbService: DailyboardService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this._rx = zip(
      this.dbService.getMyDailyScore(),
      this.dbService.getOtherPlayerDetails()
    ).subscribe(data => {
      this.myData = data[0];
      this.otherPlayerDetails = data[1];
    });
  }

  openGuessFormDialog() {
    this.dialog.open(SubmitGuessFormDialogComponent, {
      data: this.myData.playDetails,
      minWidth: '24%',
      position: { top: '2%' },
    });
  }
}
