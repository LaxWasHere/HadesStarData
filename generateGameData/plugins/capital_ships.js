'use strict';

module.exports = function(main, obj) {
  const cerberusList = main.dataByTypes.capital_ships.cerberus;
  const shipSpawners = main.readCSV('ship_spawners');
  const GhostSpawnSecs = main.readCSV('solar_system_gen_data').RedStar.GhostSpawnSecs;

  cerberusList.forEach((e) => {
    fixModulesShipsData(obj, e, 'InitialModule', 'InitialModuleLevels');
  });
  fixModulesShipsData(obj, 'CorpFlagship', 'FlagshipModules', 'FlagshipModuleLevels');
  Object.keys(shipSpawners.Ghosts).forEach((k) => {
    if (!ignoringHeaders.includes(k)) {
      obj.CerberusGhosts[k] = shipSpawners.Ghosts[k];
    }
  });
  obj.CerberusGhosts.GhostSpawnSecs = GhostSpawnSecs;
  return obj;

  // из "{key:[module1!module2], key2:[1!2]}" в "{module1:[1], module2:[2]}"
  function fixModulesShipsData(obj, name, Modules, ModuleLevels) {
    const modules = (Array.isArray(obj[name][Modules])) ? obj[name][Modules] : [obj[name][Modules]];
    const levels = (Array.isArray(obj[name][ModuleLevels])) ? obj[name][ModuleLevels] : [obj[name][ModuleLevels]];
    const obj1 = obj[name];

    for (const i in modules) {
      const moduleArr = modules[i].split('!');
      const levelArr = String(levels[i]).split('!');
      for (const k in moduleArr) {
        const key = moduleArr[k];
        const value = Number(levelArr[k]);
        const stockValue = obj1[key];
        if (stockValue === undefined || stockValue === '') {
          obj1[key] = value;
        } else {
          if (typeof (stockValue) == 'object') {
            obj1[key].push(value);
          } else {
            obj1[key] = [];
            obj1[key].push(stockValue, value);
          }
        }
      }
    }
    obj1.maxLevel = obj[name].maxLevel;
    obj1.fillSpace();
    delete obj1[Modules];
    delete obj1[ModuleLevels];
  }
};
