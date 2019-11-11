import { Component, OnInit } from '@angular/core';
import { timer,interval } from 'rxjs';
import { take, map, tap, scan } from 'rxjs/operators';
import { serverStatusTypes } from 'projects/action-state/src/lib/ngrx';

@Component({
  selector: 'app-sample-spinner',
  templateUrl: './sample-spinner.component.html',
  styleUrls: ['./sample-spinner.component.css']
})
export class SampleSpinnerComponent implements OnInit {

  status$ = timer(2000, 3000).pipe(
    take(3),
    scan( (acc, current) => {
      if ( current === 0 ) {
        return serverStatusTypes.notStarted;
      } else {
        switch (acc) {
          case serverStatusTypes.notStarted:
            return serverStatusTypes.inProgress;
          case serverStatusTypes.inProgress:
            return serverStatusTypes.success;
        }
      }
    }),
    map( d => ( { status: d, id: '123'} ) ),
    tap( d => console.log(d))
  );
  constructor() { }

  ngOnInit() {
  }

}
