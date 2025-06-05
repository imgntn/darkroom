# The Dark Room

The Dark Room is a browser-based game built with WebGL and Three.js. It creates a 3D world rendered entirely with text. Originally developed during Global Game Jam 2014, the project lets you explore a "dark room" environment and solve puzzles using keyboard and gamepad controls.

## Features

- **Text-Based World** – All visuals, including characters and environments, are composed of typography.
- **Multiple Control Schemes** – Play with keyboard, gamepad, or touch controls.
- **Puzzle Progression** – Navigate rooms, interact with objects, and complete challenges to advance.
- **Audio Toggle** – Mute or unmute background audio with the on-screen button or the `M` key.
- **Share Progress** – Quickly share your best puzzle times using the Web Share API or clipboard.
- **Offline Support** – After an initial visit, the game works without a network connection thanks to a service worker.

## Installation

1. Install Node.js (v18 or later recommended).
2. Run `npm install` to install dependencies.
3. Build the project:
   ```bash
   npm run build
   ```

For automatic rebuilding during development, run `npm run dev` instead.

## Running the Game Locally

Start the server and open the game in your browser:

```bash
npm start
```

Then visit [http://localhost:3333](http://localhost:3333).

### Keyboard Shortcuts

- **WASD** – Move around the level.
- **Space** – Perform the action specified in the level.
- **M** – Toggle audio (also available via on-screen button).
- **P** – Open the progress overlay and share your progress.
- **O** – Toggle the admin panel to view and edit saved progress.

### Running Tests

Execute unit tests with Web Test Runner:

```bash
npm test
```

## Building for Production

A production build bundles scripts, optimizes assets, and generates a service worker. Run:

```bash
npm run build
```

The output is placed in the `dist/` directory and can be deployed to any static hosting environment.

## PWA and Offline Support

A service worker caches key assets so the game runs offline after the first load.
The repository includes a PWA manifest, and when installed on mobile devices the
game launches in standalone mode. Offline navigation requests fall back to
`offline.html`.

## Frequently Asked Questions

**Why is everything made of text?**
: The Dark Room was conceived as an experimental project—rendering a 3D world purely from text characters adds a unique aesthetic and reduces reliance on traditional textures.

**Can I play offline?**
: Yes. After loading the site once while online, the service worker caches core assets so the game can run without a network connection.

**How do I share my puzzle progress?**
: Use the **Share Progress** button (or press `P`) in the progress overlay. If your browser supports the Web Share API, it will open the native share dialog. Otherwise, the progress text is copied to your clipboard.

**Where do the icons come from?**
: To comply with repository guidelines, icon placeholders are provided as plain text files in `icons/`.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests. Please run the tests (`npm test`) before committing changes.

## Additional Resources

- [Live Demo](http://the-dark-room-game.herokuapp.com)
- [Global Game Jam 2014](https://globalgamejam.org/) – the event where the project originated.

