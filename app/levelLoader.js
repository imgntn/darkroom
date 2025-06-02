const loaded = {};

const loaders = {
  burningbox: () => Promise.all([
    import(/* webpackChunkName: "burningbox" */ './modules/levels/levels.burningbox.js'),
    import(/* webpackChunkName: "camera-burningbox" */ './modules/cameras/cameras.burningbox.js')
  ]),
  dinner_party: () => Promise.all([
    import(/* webpackChunkName: "dinner_party" */ './modules/levels/levels.dinner_party.js'),
    import(/* webpackChunkName: "camera-dinner_party" */ './modules/cameras/cameras.dinner_party.js')
  ]),
  procession_of_lizards: () => Promise.all([
    import(/* webpackChunkName: "lizards" */ './modules/levels/levels.procession_of_lizards.js'),
    import(/* webpackChunkName: "camera-lizards" */ './modules/cameras/cameras.procession_of_lizards.js')
  ]),
  train: () => Promise.all([
    import(/* webpackChunkName: "train" */ './modules/levels/levels.train.js'),
    import(/* webpackChunkName: "camera-train" */ './modules/cameras/cameras.train.js')
  ])
};

export async function loadLevel(name) {
  if (loaded[name]) return loaded[name];
  const loader = loaders[name];
  if (!loader) throw new Error(`Unknown level ${name}`);
  const [levelMod, cameraMod] = await loader();
  const level = levelMod.default || levelMod;
  const camera = cameraMod.default || cameraMod;
  loaded[name] = { level, camera };
  return loaded[name];
}

export function getLoadedLevel(name) {
  return loaded[name];
}
