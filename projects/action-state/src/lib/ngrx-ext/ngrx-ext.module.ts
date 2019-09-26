import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { actionStatusReducer } from '../ngrx';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('ActionStatus', actionStatusReducer),
  ]
})
export class NgrxExtModule { }
