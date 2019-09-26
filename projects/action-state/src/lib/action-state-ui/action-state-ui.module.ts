import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionStateSpinnerComponent } from '../action-state-spinner/action-state-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    ActionStateSpinnerComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    ActionStateSpinnerComponent,
  ]
})
export class ActionStateUiModule { }
