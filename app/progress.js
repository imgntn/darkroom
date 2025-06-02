export function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem('progress')) || { levels: {}, items: {}, puzzleSolved: false };
  } catch (e) {
    return { levels: {}, items: {}, puzzleSolved: false };
  }
}

let progress = loadProgress();

export function markLevelVisited(id) {
  progress.levels[id] = true;
  save();
}

export function markItemCollected(name) {
  progress.items[name] = true;
  save();
}

export function markPuzzleSolved() {
  progress.puzzleSolved = true;
  save();
}

export function getProgress() {
  return progress;
}

function save() {
  localStorage.setItem('progress', JSON.stringify(progress));
}
