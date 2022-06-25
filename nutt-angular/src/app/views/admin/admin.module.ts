import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../../shared/shared.module';
import { AdminService } from './admin.service';
import { AddPlayerDialogComponent } from './add-player-dialog/add-player-dialog.component';
import { GamePlayerDetailComponent } from './game-player-detail/game-player-detail.component';

@NgModule({
  providers: [AdminService],
  declarations: [
    AdminComponent,
    AddPlayerDialogComponent,
    GamePlayerDetailComponent,
  ],
  imports: [SharedModule],
})
export class AdminModule {}
