http://the-dark-room-game.herokuapp.com

a webGL world made of text that puts players in the dream of one of freud's most famous patients.  made in a couple of hectic days at facebook hq for global game jam 2014.

![alt tag](http://i.imgur.com/BTIl5zC.png)
![alt tag](http://i.imgur.com/7emZTB1.png)

with:

sherol chen

adreinne johnson

dan dugan


WASD controls, press the space bar to do the action that the level says you should... definitely a work in progress!

## Local Development

1. Install dependencies and build the bundle using webpack:
   ```bash
   npm install
   npm run build
   ```

2. Start the server:
   ```bash
   npm start
   ```

Then open [http://localhost:3333](http://localhost:3333) in your browser.

Use the **Mute** button (or press **M**) to toggle audio. The preference
persists across sessions.

### Running Tests

Run the automated tests with Web Test Runner:

```bash
npm test
```

### Offline Play

The game includes a service worker that caches key assets for offline use. After
loading the site once while online, you can revisit without a network
connection and it will continue to work.

The project now provides a PWA manifest and offline fallback page so it can be
installed on mobile devices. When offline, navigation requests show
`offline.html`.
