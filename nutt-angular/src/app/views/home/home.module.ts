import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { DailyboardComponent } from './dailyboard/dailyboard.component';
import { LeaderboardService } from './leaderboard/leaderboard.service';
import { PlayerDetailsComponent } from './dailyboard/player-details/player-details.component';
import { LeaderboardTableComponent } from './leaderboard/leaderboard-table/leaderboard-table.component';
import { DailyboardService } from './dailyboard/dailyboard.service';
import { PlayerScoreTableComponent } from './dailyboard/player-score-table/player-score-table.component';
import { SubmitGuessFormDialogComponent } from './dailyboard/submit-guess-form-dialog/submit-guess-form-dialog.component';

@NgModule({
  providers: [LeaderboardService, DailyboardService],
  declarations: [
    HomeComponent,
    LeaderboardComponent,
    DailyboardComponent,
    PlayerDetailsComponent,
    LeaderboardTableComponent,
    PlayerScoreTableComponent,
    SubmitGuessFormDialogComponent,
  ],
  imports: [SharedModule],
})
export class HomeModule {}
