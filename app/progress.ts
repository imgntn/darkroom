export interface ProgressState {
  levels: Record<string, boolean>;
  items: Record<string, boolean>;
  puzzleSolved: boolean;
  puzzleTimes: number[];
  currentAttemptStart?: number;
  currentLevel?: string | number;
}

export function loadProgress(): ProgressState {
  try {
    return JSON.parse(localStorage.getItem('progress') || 'null') || {
      levels: {},
      items: {},
      puzzleSolved: false,
      puzzleTimes: [],
      currentLevel: undefined
    };
  } catch (e) {
    return { levels: {}, items: {}, puzzleSolved: false, puzzleTimes: [], currentLevel: undefined };
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

export function setCurrentLevel(id: string | number): void {
  progress.currentLevel = id;
  save();
}

export function markItemCollected(name: string): void {
  progress.items[name] = true;
  save();
}

export function markPuzzleSolved(): void {
  progress.puzzleSolved = true;
  if (progress.currentAttemptStart) {
    const elapsed = Date.now() - progress.currentAttemptStart;
    progress.puzzleTimes.push(elapsed);
    progress.currentAttemptStart = undefined;
    try {
      fetch('/api/scoreboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ time: elapsed })
      });
    } catch (e) {
      console.error(e);
    }
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

export function getPuzzleTimesSorted(): number[] {
  return progress.puzzleTimes.slice().sort((a, b) => a - b);
}

export function getProgress(): ProgressState {
  return progress;
}

export function resetProgress(): void {
  progress = { levels: {}, items: {}, puzzleSolved: false, puzzleTimes: [], currentLevel: undefined };
  save();
}

function save(): void {
  localStorage.setItem('progress', JSON.stringify(progress));
}
