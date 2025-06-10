export function loadPlayerName() {
  return localStorage.getItem('playerName') || '';
}

export function savePlayerName(name) {
  localStorage.setItem('playerName', name);
}

export default { loadPlayerName, savePlayerName };
