# The Dark Room

Live demo: <http://the-dark-room-game.herokuapp.com>

The Dark Room is a WebGL world rendered entirely with text. It places players in the dream of one of Freud's most famous patients and was originally created during Global Game Jam 2014 at Facebook HQ.

For an in-depth guide covering installation, controls, and offline support, see
[the documentation](docs/README.md).
For QA setup instructions, see [the QA guide](docs/QA_GUIDE.md).


![alt tag](http://i.imgur.com/BTIl5zC.png)
![alt tag](http://i.imgur.com/7emZTB1.png)

## Features

- **Text-Based World** – Every object is composed of typography.
- **Multiple Control Schemes** – Play with keyboard, gamepad, or touch.
- **Puzzle Progression** – Navigate rooms and solve challenges.
- **Audio Toggle** – Mute or unmute with the on-screen button or `M`.
- **Fullscreen Mode** – Press `F` or use the on-screen button for fullscreen.
- **Share Progress** – Share your best times via the Web Share API.
- **Offline Support** – Works without a network connection after first load.
- **Customizable Controls** – Press `Escape` to remap movement and interaction keys.

with:

sherol chen

adreinne johnson

dan dugan


Use **WASD** or the **arrow keys** to move around. Press the space bar to perform the action the level requires... definitely a work in progress!
Press **Escape** at any time to open the settings overlay and remap the movement or interaction keys. Your choices persist locally.
Press **R** during a puzzle to quickly restart your attempt.

## Local Development

Ensure you have **Node.js v18 or later** installed.

1. Install dependencies and build the bundle using webpack:
   ```bash
   npm install
   npm run build
   ```

To automatically rebuild and serve the game with hot module replacement during
development, run:

```bash
npm run dev
```

2. Start the server:
   ```bash
   npm start
   ```

Then open [http://localhost:3333](http://localhost:3333) in your browser.

You can also hit [http://localhost:3333/health](http://localhost:3333/health)
to confirm the Express server is responding.

Use the **Mute** button (or press **M**) to toggle audio. The preference
persists across sessions.
Use the **Fullscreen** button (or press **F**) for an immersive experience.

### Running Tests

Run the automated tests with Web Test Runner:

```bash
npm test
```

### Sharing Progress

Use the **Share Progress** button in the progress overlay (press **P** to open) to
share your best puzzle time and current level. The feature uses the Web Share API
when available and falls back to copying text to the clipboard.

### Offline Play

The game includes a service worker that caches key assets for offline use. After
loading the site once while online, you can revisit without a network
connection and it will continue to work.

The project now provides a PWA manifest and offline fallback page so it can be
installed on mobile devices. When offline, navigation requests show
`offline.html`.

Icon placeholders used in the PWA manifest live in the `icons/` folder as plain
text files to keep this repository binary-free.
