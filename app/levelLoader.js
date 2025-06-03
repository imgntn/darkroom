const loaded = {};
let loadingEl = null;

function showLoading() {
  if (!loadingEl) {
    loadingEl = document.createElement('div');
    loadingEl.id = 'levelLoading';
    loadingEl.textContent = 'Loading level...';
    loadingEl.style.position = 'absolute';
    loadingEl.style.top = '50%';
    loadingEl.style.left = '50%';
    loadingEl.style.transform = 'translate(-50%, -50%)';
    loadingEl.style.padding = '1em';
    loadingEl.style.background = 'rgba(0,0,0,0.8)';
    loadingEl.style.color = '#fff';
    document.body.appendChild(loadingEl);
  }
  loadingEl.style.display = 'block';
}

function hideLoading() {
  if (loadingEl) loadingEl.style.display = 'none';
}

const loaders = {
  burningbox: () => Promise.all([
    import(/* webpackChunkName: "burningbox" */ './modules/levels/levels.burningbox.js'),
    import(/* webpackChunkName: "camera-burningbox" */ './modules/cameras/cameras.burningbox')
  ]),
  dinner_party: () => Promise.all([
    import(/* webpackChunkName: "dinner_party" */ './modules/levels/levels.dinner_party.js'),
    import(/* webpackChunkName: "camera-dinner_party" */ './modules/cameras/cameras.dinner_party')
  ]),
  procession_of_lizards: () => Promise.all([
    import(/* webpackChunkName: "lizards" */ './modules/levels/levels.procession_of_lizards.js'),
    import(/* webpackChunkName: "camera-lizards" */ './modules/cameras/cameras.procession_of_lizards')
  ]),
  train: () => Promise.all([
    import(/* webpackChunkName: "train" */ './modules/levels/levels.train.js'),
    import(/* webpackChunkName: "camera-train" */ './modules/cameras/cameras.train')
  ])
};

const prefetchers = {
  burningbox: () => {
    import(/* webpackPrefetch: true */ './modules/levels/levels.burningbox.js');
    import(/* webpackPrefetch: true */ './modules/cameras/cameras.burningbox');
  },
  dinner_party: () => {
    import(/* webpackPrefetch: true */ './modules/levels/levels.dinner_party.js');
    import(/* webpackPrefetch: true */ './modules/cameras/cameras.dinner_party');
  },
  procession_of_lizards: () => {
    import(/* webpackPrefetch: true */ './modules/levels/levels.procession_of_lizards.js');
    import(/* webpackPrefetch: true */ './modules/cameras/cameras.procession_of_lizards');
  },
  train: () => {
    import(/* webpackPrefetch: true */ './modules/levels/levels.train.js');
    import(/* webpackPrefetch: true */ './modules/cameras/cameras.train');
  }
};

export async function loadLevel(name) {
  if (loaded[name]) return loaded[name];
  const loader = loaders[name];
  if (!loader) throw new Error(`Unknown level ${name}`);
  showLoading();
  const [levelMod, cameraMod] = await loader();
  hideLoading();
  const level = levelMod.default || levelMod;
  const camera = cameraMod.default || cameraMod;
  loaded[name] = { level, camera };
  return loaded[name];
}

export function prefetchLevel(name) {
  const pf = prefetchers[name];
  if (pf && !loaded[name]) pf();
}

export function getLoadedLevel(name) {
  return loaded[name];
}
