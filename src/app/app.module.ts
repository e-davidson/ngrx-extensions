import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SampleSpinnerComponent } from './sample-spinner/sample-spinner.component';
import { ActionStateUiModule } from 'projects/action-state/src/lib/action-state-ui/action-state-ui.module';

@NgModule({
  declarations: [
    AppComponent,
    SampleSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    NoopAnimationsModule,
    ActionStateUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
