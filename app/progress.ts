export interface ProgressState {
  levels: Record<string, boolean>;
  items: Record<string, boolean>;
  puzzleSolved: boolean;
  puzzleTimes: number[];
  currentAttemptStart?: number;
}

export function loadProgress(): ProgressState {
  try {
    return JSON.parse(localStorage.getItem('progress') || 'null') || {
      levels: {},
      items: {},
      puzzleSolved: false,
      puzzleTimes: []
    };
  } catch (e) {
    return { levels: {}, items: {}, puzzleSolved: false, puzzleTimes: [] };
  }
}

let progress: ProgressState = loadProgress();

export function startPuzzle(): void {
  progress.currentAttemptStart = Date.now();
  save();
}

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
  if (progress.currentAttemptStart) {
    progress.puzzleTimes.push(Date.now() - progress.currentAttemptStart);
    progress.currentAttemptStart = undefined;
  }
  save();
}

export function resetPuzzleTimes(): void {
  progress.puzzleTimes = [];
  progress.currentAttemptStart = undefined;
  progress.puzzleSolved = false;
  save();
}

export function getBestPuzzleTime(): number | null {
  if (!progress.puzzleTimes.length) return null;
  return Math.min(...progress.puzzleTimes);
}

export function getProgress(): ProgressState {
  return progress;
}

export function resetProgress(): void {
  progress = { levels: {}, items: {}, puzzleSolved: false, puzzleTimes: [] };
  save();
}

function save(): void {
  localStorage.setItem('progress', JSON.stringify(progress));
}
