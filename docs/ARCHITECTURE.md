# Architecture Overview

The diagram below illustrates the flow of data within the game.

```
+-----------------+     +------------------+
|  WebGL Renderer |<--> |    Game Logic    |
+-----------------+     +------------------+
        ^                       |
        |                       v
+-----------------+     +------------------+
|  ServiceWorker  |<--> | Cached Resources |
+-----------------+     +------------------+
```

The WebGL renderer draws the text-based world and communicates with the core
game logic. A service worker sits between the browser and network requests to
cache assets so the game runs offline after the first visit.
