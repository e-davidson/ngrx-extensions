import { Observable, scheduled, asapScheduler, merge } from 'rxjs';
import { map, concatMap, delay, filter } from 'rxjs/operators';


export function delayOn<T>( predicate: (t: T) => boolean, delayTime: number ) {
  return (src: Observable<T>) => {
    return src.pipe(
      concatMap( r => {
        if ( predicate(r) ) {
          return merge(
            scheduled([{r}], asapScheduler),
            scheduled( [null] , asapScheduler).pipe(delay(delayTime))
          ).pipe(
            filter( d =>  d  ),
            map( d => d.r )
          );
        } else {
          return scheduled([r], asapScheduler);
        }
      })
    );
  };
}
