export interface ProgressState {
  levels: Record<string, boolean>;
  items: Record<string, boolean>;
  puzzleSolved: boolean;
}

export function loadProgress(): ProgressState {
  try {
    return JSON.parse(localStorage.getItem('progress') || 'null') || {
      levels: {},
      items: {},
      puzzleSolved: false
    };
  } catch (e) {
    return { levels: {}, items: {}, puzzleSolved: false };
  }
}

let progress: ProgressState = loadProgress();

export function markLevelVisited(id: string): void {
  progress.levels[id] = true;
  save();
}

export function markItemCollected(name: string): void {
  progress.items[name] = true;
  save();
}

export function markPuzzleSolved(): void {
  progress.puzzleSolved = true;
  save();
}

export function getProgress(): ProgressState {
  return progress;
}

export function resetProgress(): void {
  progress = { levels: {}, items: {}, puzzleSolved: false };
  save();
}

function save(): void {
  localStorage.setItem('progress', JSON.stringify(progress));
}
