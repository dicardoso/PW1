import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ReserveDialogComponent } from './reserve-dialog/reserve-dialog.component';
import {MatCardModule} from '@angular/material/card';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    ReserveDialogComponent
  ],
  exports: [
    ReserveDialogComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDatepicker,
    MatNativeDateModule,
    MatSnackBar
  ]
})
export class AreasModule {
}
