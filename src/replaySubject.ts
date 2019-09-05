import { ReplaySubject, Observable, Subject, interval, pipe } from 'rxjs';
import { flatMap, map, take, shareReplay, tap } from 'rxjs/operators';

class Startup {

  public static main(): number {
    const subject: ReplaySubject<number> = new ReplaySubject();
    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);
    subject.subscribe((value: number) => {
      console.log('Early Subscriber', value);
    });
    subject.next(5);
    subject.next(6);

    subject.subscribe((value: number) => {
      console.log('Late Subscriber', value);
    });
    return 0;
  }
};

Startup.main();