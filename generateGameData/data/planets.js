// generated by generateGameData/index.js + planets.js plugin

let data = {
  yellowstarTable: {
    Name: ["desert_lv1", "lava_lv1", "water_lv1", "terran_lv1", "gas_lv1", "terran_lv2", "lava_lv2", "water_lv2", "gas_lv2", "desert_lv2", "lava_lv3", "desert_lv3", "water_lv3", "terran_lv3", "ice_variation1", "ice_variation2"],
    TID: ["TID_PLANET_DESERT_1", "TID_PLANET_LAVA_1", "TID_PLANET_WATER_1", "TID_PLANET_TERRAN_1", "TID_PLANET_GAS_1", "TID_PLANET_TERRAN_2", "TID_PLANET_LAVA_2", "TID_PLANET_WATER_2", "TID_PLANET_GAS_2", "TID_PLANET_DESERT_2", "TID_PLANET_LAVA_3", "TID_PLANET_DESERT_3", "TID_PLANET_WATER_3", "TID_PLANET_TERRAN_3", "TID_PLANET_ICE", "TID_PLANET_ICE"],
    TID_Description: [
      "TID_PLANET_DESERT_DESCR",
      "TID_PLANET_LAVA_DESCR",
      "TID_PLANET_WATER_DESCR",
      "TID_PLANET_TERRAN_DESCR",
      "TID_PLANET_GAS_DESCR",
      "TID_PLANET_TERRAN_DESCR",
      "TID_PLANET_LAVA_DESCR",
      "TID_PLANET_WATER_DESCR",
      "TID_PLANET_GAS_DESCR",
      "TID_PLANET_DESERT_DESCR",
      "TID_PLANET_LAVA_DESCR",
      "TID_PLANET_DESERT_DESCR",
      "TID_PLANET_WATER_DESCR",
      "TID_PLANET_TERRAN_DESCR",
      "TID_PLANET_ICE_DESCR",
      "TID_PLANET_ICE_DESCR",
    ],
    MaxUpgradeLevel: [15, 15, 15, 15, 20, 35, 35, 35, 50, 35, 50, 50, 50, 50, 50, 50],
    CreditIncomeModifier: [70, 70, 100, 100, 100, 100, 80, 100, 100, 80, 90, 90, 100, 100, 100, 100],
    FuelIncomeModifier: [50, 50, 100, 100, 100, 100, 60, 100, 100, 0, 70, 0, 100, 100, 100, 100],
    CreditStorageModifier: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
    FuelStorageModifier: [100, 0, 100, 100, 100, 100, 0, 100, 100, 100, 0, 100, 100, 100, 100, 100],
    CreditShipmentModifier: [70, 90, 95, 115, 120, 120, 95, 100, 125, 75, 100, 85, 105, 125, 140, 140],
    MaxShipments: [10, 15, 18, 18, 22, 27, 24, 24, 40, 24, 36, 36, 38, 35, 40, 50],
    ShipmentsPerHour: [8, 12, 14, 15, 18, 22, 20, 20, 32, 20, 30, 30, 32, 30, 32, 42],
    maxLevel: 16,
  },
  redstarTable: {
    Name: ["destroyed01", "destroyed02", "destroyed03", "destroyed04", "destroyed05", "destroyed06", "destroyed07", "destroyed08", "destroyed09", "destroyed10"],
    TID: ["TID_PLANET_DESTROYED", "TID_PLANET_DESTROYED", "TID_PLANET_DESTROYED", "TID_PLANET_DESTROYED", "TID_PLANET_DESTROYED", "TID_PLANET_DESTROYED", "TID_PLANET_DESTROYED", "TID_PLANET_DESTROYED", "TID_PLANET_DESTROYED", "TID_PLANET_DESTROYED"],
    TID_Description: ["TID_PLANET_DESTROYED_DESCR", "TID_PLANET_DESTROYED_DESCR", "TID_PLANET_DESTROYED_DESCR", "TID_PLANET_DESTROYED_DESCR", "TID_PLANET_DESTROYED_DESCR", "TID_PLANET_DESTROYED_DESCR", "TID_PLANET_DESTROYED_DESCR", "TID_PLANET_DESTROYED_DESCR", "TID_PLANET_DESTROYED_DESCR", "TID_PLANET_DESTROYED_DESCR"],
    RedStarDisplayLevel: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    maxLevel: 10,
  },
  whitestarTable: {
    Name: ["whitestar1", "whitestar2", "whitestar_l1"],
    TID: ["TID_PLANET_DESTROYED", "TID_PLANET_DESTROYED", "TID_PLANET_DESTROYED"],
    TID_Description: ["TID_WHITE_STAR_PLANET_DESCR", "TID_WHITE_STAR_PLANET_DESCR", "TID_WHITE_STAR_PLANET_DESCR"],
    RedStarDisplayLevel: [10, 5, 1],
    TicksPerRelic: [720, 2400, 2400],
    HydrogenForRelic: [150, 300, 500],
    maxLevel: 3,
  },
};

let byTypes = {
  yellowstar: ["desert_lv1", "lava_lv1", "water_lv1", "terran_lv1", "gas_lv1", "terran_lv2", "lava_lv2", "water_lv2", "gas_lv2", "desert_lv2", "lava_lv3", "desert_lv3", "water_lv3", "terran_lv3", "ice_variation1", "ice_variation2"],
  redstar: ["destroyed01", "destroyed02", "destroyed03", "destroyed04", "destroyed05", "destroyed06", "destroyed07", "destroyed08", "destroyed09", "destroyed10"],
  whitestar: ["whitestar1", "whitestar2", "whitestar_l1"],
  notregistered: ["yellowstarTable", "redstarTable", "whitestarTable"],
};

module.exports = { data, byTypes };
