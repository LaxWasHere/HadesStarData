'use strict';

module.exports = function(main, obj) {
  const result = new main.RawJson;
  const artsTypes = main.dataByTypes.artifacts.data;
  const tableNames = main.dataByTypes.artifacts.blueprints;

  for (const name of artsTypes) {
    const obj1 = new main.NestedRawJson;

    Object.keys(obj) // собрать объекты одного типа в одном месте
        .filter((e) => (e.startsWith(name)))
        .forEach((k) => obj1[k] = obj[k]);

    result[name] = main.compileOne(obj1);
    result[name].Name = name;
    result[name].TID_Description = result[name].TID_Description[0];
    result[name].MaxModuleLevelToAward = result[name].MaxModuleLevelToAward[0];
    // result[name].BlueprintTypes = result[name].BlueprintTypes[0]
    ['BlueprintTypes', 'Model', 'MaxModuleLevelToAward'].forEach((e) => delete result[name][e]);
  }
  for (const a of Object.keys(result)) {
    const obj1 = result[a];
    const minArr = obj1.BlueprintsMin;
    const maxArr = obj1.BlueprintsMax;
    const blueprints = new main.NestedRawJson(); // "таблица" Blueprints получилась большой, было принято решение сохранить отдельно

    obj1.pushArrays('Credits', 'CreditsMin', 'CreditsMax');
    obj1.pushArrays('Hydrogen', 'HydrogenMin', 'HydrogenMax');
    for (let i = 0; i < minArr.length; i++) {
      const min = String(minArr[i]).split('!');
      const max = String(maxArr[i]).split('!');
      const arr = [];
      for (let j = 0; j < min.length; j++) {
        arr.push(min[j] + '!' + max[j]);
      }
      blueprints[i + 1] = arr;
    }
    const i = Object.keys(result).indexOf(a);
    blueprints.maxLevel = obj1.maxLevel;
    result[tableNames[i]] = blueprints.fillSpace(' ', 'push');
    result[tableNames[i]]['Name'] = tableNames[i];
    ['BlueprintsMin', 'BlueprintsMax'].forEach((e) => delete obj1[e]);
  }
  Object.defineProperty(result,
      'metadata', { // скрытый объект от перебора
        configurable: true,
        writable: true,
        value: obj.metadata,
      });
  return result;
};
