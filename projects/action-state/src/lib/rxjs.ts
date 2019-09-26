import { Observable, interval } from 'rxjs';
import { scan, delayWhen, map } from 'rxjs/operators';

enum delayStatus {
  noDelay,
  delayNext,
  delay
}

export function delayOn<T>( predicate: (t: T) => boolean, delay: number ) {
  return (src: Observable<T>) => {
    return src.pipe(
      scan( (acc, cur) => {
        if ( predicate(cur) ) {
          return { result: cur, delay: delayStatus.delayNext };
        } else {
          if ( acc.delay === delayStatus.delayNext ) {
            return { result: cur, delay: delayStatus.delay };
          } else {
            return { result: cur, delay: delayStatus.noDelay };
          }
        }
      }, { delay: delayStatus.noDelay, result: null }),
      delayWhen( ( d ) => interval( d.delay === delayStatus.delay ? delay : 0 ) ),
      map( d => d.result )
    );
  };
}
