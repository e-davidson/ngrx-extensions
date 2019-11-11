import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ActionStatus, serverStatusTypes } from '../ngrx';
import { delayOn } from '../rxjs';

@Component({
  selector: 'lib-action-state-spinner',
  templateUrl: './action-state-spinner.component.html',
  styleUrls: ['./action-state-spinner.component.css']
})
export class ActionStateSpinnerComponent implements OnInit {

  @Input() status$: Observable<ActionStatus>;
  serverActionStatus$: Observable<ActionStatus>;
  serverStatusTypes = serverStatusTypes;

  ngOnInit() {
    this.serverActionStatus$ = this.status$.pipe(
      delayOn( a => a.status === serverStatusTypes.inProgress , 500)
    );
  }
}
