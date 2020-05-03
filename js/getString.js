"use strict";
import { getCookie } from './cookie.js'

const lang = getCookie("language") || "en"

function load() {
    let r = $.ajax({
        url: `${lang}Strings.json`,
        async: false,
        dataType: 'json',
    }).done(function (data) {
        return data;
    })
    return JSON.parse(r.responseText)
}

function getStr(key) {
    if (window.locStrings == undefined) { // иначе будет загружать до потери пульса 🥴
        window.locStrings = load()
    }
    key = (locStrings[key]) ? key : getKey(key)
    return locStrings[key] || key;
}

function getKey(str) {
    let stringKeys = {
        //MaxUpgradeLevel: '',
        CreditIncomeModifier: 'TID_PLANET_UPG_CREDIT_YIELD',
        FuelIncomeModifier: 'TID_PLANET_UPG_HYDROGEN_YIELD',
        CreditStorageModifier: 'TID_PLANET_UPG_CREDIT_STORE',
        FuelStorageModifier: 'TID_PLANET_UPG_HYDROGEN_STORE',
        //CreditShipmentModifier: '',
        ShipmentsPerHour: 'TID_NUM_SHIPMENTS_PER_HR',
        TID: 'TID_LEADERBOARDS_DIALOG_COLUMN_NAME',
        TID_Description: 'TID_CORP_DESCR_LABEL',
        Name: 'TID_CORP_NAME_LABEL',
        array: 'ᅠ ',
        CreditStorage: 'TID_PLANET_UPG_CREDIT_STORE',
        FuelStorage: 'TID_PLANET_UPG_HYDROGEN_STORE',
        CreditsPerHour: 'TID_PLANET_UPG_CREDIT_YIELD',
        FuelPerHour: 'TID_PLANET_UPG_HYDROGEN_YIELD',
        //ShipmentsCRValuePerDay: ''
        SectorUnlockTime: 'TID_SECTOR_UNLOCK_TIME',
        Sentinels: 'TID_SHIP_CERB_FIGHTER',
        Guardians: 'TID_SHIP_CERB_SECTOR_GUARDIAN',
        Colossus: 'TID_SHIP_CERB_COLOSSUS',
        desert: 'TID_PLANET_DESERT_2',
        lava: 'TID_PLANET_LAVA_2',
        water: 'TID_PLANET_WATER_2',
        terran: 'TID_PLANET_TERRAN_2',
        gas: 'TID_PLANET_GAS_1',
        ice: 'TID_PLANET_ICE',
        MinScannerLevel: 'TID_BUILDING_SHORT_RANGE_SCANNER',
        AsteroidsMax: 'TID_MODULE_GENESIS_MAX_ASTEROIDS',
        CerbGroup: 'Cerberus',
        BaseType: 'TID_CERB_STATION_HOME2',
        BSAnomaly: 'TID_BLUE_STAR_ANOMALY',
        DesignUpgradeCost: 'UpgradeCost',
        DesignUpgradeTime: 'UpgradeTime',
        BuildCost: 'TID_STAT_SHIP_DESIGN_BUILD_COST',
        JobCapacity: 'TID_TRANSPORT_CAPACITY',
        FuelUsePer5000Distance: 'TID_FLEET_HYDRO_USAGE',
        JumpFuelCosts: 'TID_FLEET_JUMP_HYDRO_USAGE',
        HealRate: 'TID_FLEET_HEAL_RATE',
        Battery: 'TID_MODULE_BATTERY',
        Recoil: 'TID_MODULE_RECOIL',
        Immolation: 'TID_MODULE_IMMOLATION',
        Stealth: 'TID_MODULE_STEALTH',
        EMPRocket: 'TID_MODULE_EMP_ROCKET',
        NumSectorsToMine: 'TID_MINER_AUTO_SECTORS',
        Trade: 'TID_SHIP_MODULE_SLOT_TYPE_0',
        Support: 'TID_SHIP_MODULE_SLOT_TYPE_2',
        Mining: 'TID_SHIP_MODULE_SLOT_TYPE_1',
        Weapon: 'TID_SHIP_MODULE_SLOT_TYPE_3',
        Shield: 'TID_SHIP_MODULE_SLOT_TYPE_4',
        AutoActivateHealth: 'TID_MODULE_HULL_THRESHOLD_STAT',
        InitialModule: 'TID_INSTALLED_MODULES_AREA_TITLE',
        MaxDPSTime: 'TID_MODULE_DESCR_MAX_DPS_TIME',
        Salvage: 'TID_MODULE_SALVAGE',
        PassiveShield: 'TID_MODULE_PASSIVE_SHIELD',
        InfluencePoints: 'TID_PLAYER_INFO_INFLUENCE_TITLE',
        DockedObjectDestroyTime: 'TID_STATUS_DESTROYING_PLANET',
        OnDestroySpawnCount: 'TID_FLEET_SENTINELS_SPAWNED',
        GuardianBattery: "cerbWeapon",
        WeakBattery: "cerbWeapon",
        InterceptorMBattery: "cerbWeapon",
        ColossusLaser: "cerbWeapon",
        DestroyerVengeance: "cerbModule",
        BomberLauncher: "cerbWeapon",
        PhoenixShield: "cerbShield",
        DartBarrage: "cerbWeapon",
        ships: 'TID_PRODUCTION_DLG_SHIPS',
        ActivationHydroOnBoard: 'TID_REQUIRED_HYDROGEN',
        // BSPenaltyPerSec: '',
        TimeToFullyRegen: 'TID_MODULE_SHIELD_FULL_REGEN_TIME',
        ShieldRegenDelay: 'TID_MODULE_SHIELD_REGEN_DELAY',
        ExtraTradeSlots: 'TID_SHIP_UPGRADE_EFFECT_TRADE_SLOTS',
        FuelUseIncrease: 'TID_SHIP_UPGRADE_EFFECT_FUEL_INCREASE',
        BCCost: 'TID_MODULE_INSTALL_PRICE_STAT',
        WaypointShipmentRewardBonus: 'TID_SHIP_UPGRADE_EFFECT_BONUS_REWARD',
        ActivationDelay: 'TID_MODULE_COOLDOWN_STAT',
        JobPayoutIncreasePercent: 'TID_SHIP_UPGRADE_EFFECT_JOB_PAYOUT_INCREASE',
        ActivationFuelCost: 'TID_MODULE_DESCR_ACTIVATION_COST',
        EffectDurationx10: 'TID_MODULE_EFFECT_DURATION_DESCR',
        MiningSpeedModifierPct: 'TID_MODULE_MINING_SPEED_STAT',
        EffectRadius: 'TID_MODULE_EFFECT_RANGE_DESCR',
        RepairHullPointsPerSecond: 'TID_MODULE_REPAIR_STAT',
        ShieldStrength: 'TID_FLEET_SHIELD_STRENGTH',
        SpeedIncrDuringActivation: 'TID_MODULE_RUSH_SPEED_INCR',
        ActivationPrep: 'TID_MODULE_ACTIVATION_PREP_TIME',
        TradeBurstShipmentsStart: 'TID_MODULE_TRADEBURST_THRESHOLD',
        TradeBurstShipmentBonus: 'TID_SHIP_UPGRADE_EFFECT_BONUS_REWARD',
        TeleportShipments: 'TID_MODULE_SHIPMENTBEAM_MAX_SHIPMENTS',
        InstantHydrogenCollected: 'TID_MODULE_CRUNCH_MAX_AMOUNT',
        Speed: 'TID_FLEET_SPEED',
        HP: 'TID_FLEET_HULL_STRENGTH',
        Damage: 'TID_MODULE_PROJECTILE_DAMAGE',
        DamageRange: 'TID_MODULE_PROJECTILE_DAMAGERANGE',
        IncreaseSectorHydroPct: 'TID_MODULE_ENRICH_INCREASE',
        SpeedIncreasePerShipment: 'TID_MODULE_RUSH_SPEED_INCR',
        MaxNewAsteroids: 'TID_MODULE_GENESIS_MAX_ASTEROIDS',
        HydroPerNewAsteroid: 'TID_MODULE_GENESIS_MAX_HYDRO',
        TradeStationDeliverReward: 'TID_OFFLOAD_MODULE_PAYOFF',
        SpawnLifetime: 'TID_DRONE_LIFETIME',
        DPS: 'TID_MODULE_DESCR_DPS',
        DamageRangeWhenNeutralized: 'TID_MODULE_SECONDARY_RANGE',
        HydrogenCapacity: 'TID_HYDRO_CAPACITY',
        AdditionalDPSPerTargetInRange: 'TID_MODULE_DESCR_DPADT',
        TimeWarpFactor: 'TID_MODULE_TIME_WARP_STAT',
        UnityBoostPercent: 'TID_MODULE_DESCR_UNITY',
        DamageReductionPct: 'TID_MODULE_DAMAGE_REDUCTION_PCT',
        SalvageHullPercent: 'TID_MODULE_SALVAGE_HULL_DESCR',
        AOEDamage: 'TID_DESTROYER_AREADAMAGE',
        DamageWhenNeutralized: 'TID_MODULE_SECONDARY_DAMAGE',
        SpawnCapacity: 'TID_TRANSPORT_CAPACITY_TOTAL',
        DroneShipmentBonus: 'TID_MODULE_BONUS_PER_SHIPMENT',
        APTPIOTTP: 'TID_DISPATCH_PREP_TIME',
        ExtraMineralStorage: 'TID_MODULE_MINERAL_STORAGE_STAT',
        HydroUploadPct: 'TID_MODULE_HYDRO_UPLOAD_PERCENT',
        MiningSpeed: 'TID_MINER_MINE_SPEED',
        MaxDPS: 'TID_MODULE_DESCR_MAX_DPS',
        MaxTargets: 'TID_MODULE_MAX_TARGETS',
        MirrorDamagePct: 'TID_MODULE_MIRROR_DAMAGE_STAT',
        RedStarLifeExtention: 'TID_MODULE_RED_STAR_EXTENSION_STAT'
    }
    if (str in stringKeys) {
        return stringKeys[str];
    }
    return str;
}
export {
    getStr
}