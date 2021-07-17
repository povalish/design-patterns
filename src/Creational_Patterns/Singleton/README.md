# Singleton

Singleton is a creational design pattern that lets you ensure that a class has only one instance.

### First way

In JavaScript, you can simply define (or instantiate) any class in the global scope. And just import your class!

Example:

```typescript
// app-config.js
class AppConfig {
}

export default new AppConfig();

// app.js
import AppConfig from './app-config.js';

// component.js
import AppConfig from './app-config.js';  // same ref as in example above
```

In TypeScript you can

### Second way

In TypeScript, we can use private constructor and static field `instance`

Example:

```typescript
class AppConfig {
  public static instance = new AppConfig();

  private constructor() {
  }
}
```
