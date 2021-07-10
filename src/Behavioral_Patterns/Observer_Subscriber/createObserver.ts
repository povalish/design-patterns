import { Listener, Observer } from './types';


export function createObserver<Event>(): Observer<Event> {
  let listeners: Listener<Event>[] = [];

  const subscribe = (listener: Listener<Event>) => {
    listeners.push(listener);

    // Unsubscribe function
    return () => {
      listeners = listeners.filter(
        (savedListener) => savedListener !== listener,
      );
    };
  };

  const publish = (event: Event) => {
    listeners.forEach((listener) => listener(event));
  };

  return {
    subscribe,
    publish,
  };
}
