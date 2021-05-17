# Design Pattern: Bridge

### Bridge is a structural design pattern that divides business logic or huge class into separate class hierarchies that can be developed independently.

One of these hierarchies (often called the Abstraction) 
will get a reference to an object of the second 
hierarchy (Implementation). The abstraction will be able 
to delegate some (sometimes, most) of its calls to the 
implementations object. Since all implementations will 
have a common interface, they’d be interchangeable inside the abstraction.

Source links: 
- controversial article (RU) [habrhabr](https://habr.com/ru/post/138357/)
- 

### Subject:
As an example I used trivial case: power sockets (EU and US types) and
devices (EU and US plugs). All of these plugs have different connections:
EU devices cannot use US plugs without adapter.

