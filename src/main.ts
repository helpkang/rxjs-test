import { take, map, combineAll, concatAll } from 'rxjs/operators';
import { interval, Observer, Observable } from 'rxjs';

const c = (observer: Observer<number>, n: number) => {
    setTimeout(() => {
        observer.next(n)
    }, 1000);
}
const subscriber = (observer: Observer<number>) => {
    c(observer, 1)
    c(observer, 2)
    // setTimeout(() => {
    //     observer.error(new Error('wro'))
    // }, 1000);
    setTimeout(() => {
        observer.complete()
    }, 1000);

    return () => console.log('end end')
}

const $subscriber = new Observable(subscriber)

$subscriber.subscribe(value => console.log(value), error => console.error(error), () => console.log('complete'))