/**
 * OBSERVER PATTERN TYPEX
 */
export type Unsubscribe = () => void;

export type Listener<Event> = (event: Event) => void;

export type Observer<Event> = {
  subscribe: (listener: Listener<Event>) => Unsubscribe;
  publish: (event: Event) => void;
}


/**
 * DOMAIN TYPES
 */

export type ActionView = {
  type: 'view';
  categoryId: number;
};

export type ActionLike = {
  type: 'like';
  postId: string;
}

export type ActionRedirect = {
  type: 'redirect';
  page: string;
}

export type UserAction = ActionView | ActionLike | ActionRedirect;
