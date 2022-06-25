import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../../shared/shared.module';
import { AdminService } from './admin.service';

@NgModule({
  providers: [AdminService],
  declarations: [AdminComponent],
  imports: [SharedModule],
})
export class AdminModule {}
