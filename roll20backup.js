const buttonlist = ["stats", "equip", "melee", "ranged", "magic"];

buttonlist.forEach(button => {
    on(`clicked:${button}`, function() {
        setAttrs({
            sheetTab: button
        });
    });
});

const parseValues = (values, stat, type = 'int') => {
    if (type === 'int') return parseInt(values[stat], 10) || 0;
    else if (type === 'float') return parseFloat(values[stat], 10) || 0;
    else if (type === 'str') return values[stat];
};

//region Stat section sheet workers
on("sheet:opened change:basemeleeoffense change:equipmeleeoffense change:tempmeleeoffense", function(eventInfo) {
    getAttrs(["BaseMeleeOffense", "EquipMeleeOffense", "TempMeleeOffense"], function(values) {
        setAttrs({
            "TotalMeleeOffense": parseValues(values, "BaseMeleeOffense") + parseValues(values, "EquipMeleeOffense") + parseValues(values, "TempMeleeOffense")
        });
    });
});

on("sheet:opened change:baserangedoffense change:equiprangedoffense change:temprangedoffense", function(eventInfo) {
    getAttrs(["BaseRangedOffense", "EquipRangedOffense", "TempRangedOffense"], function(values) {
        setAttrs({
            "TotalRangedOffense": parseValues(values, "BaseRangedOffense") + parseValues(values, "EquipRangedOffense") + parseValues(values, "TempRangedOffense")
        });
    });
});

on("sheet:opened change:basemagicoffense change:equipmagicoffense change:tempmagicoffense", function(eventInfo) {
    getAttrs(["BaseMagicOffense", "EquipMagicOffense", "TempMagicOffense"], function(values) {
        setAttrs({
            "TotalMagicOffense": parseValues(values, "BaseMagicOffense") + parseValues(values, "EquipMagicOffense") + parseValues(values, "TempMagicOffense")
        });
    });
});

on("sheet:opened change:basemeleedefense change:equipmeleedefense change:tempmeleedefense", function(eventInfo) {
    getAttrs(["BaseMeleeDefense", "EquipMeleeDefense", "TempMeleeDefense"], function(values) {
        setAttrs({
            "TotalMeleeDefense": parseValues(values, "BaseMeleeDefense") + parseValues(values, "EquipMeleeDefense") + parseValues(values, "TempMeleeDefense")
        });
    });
});

on("sheet:opened change:baserangeddefense change:equiprangeddefense change:temprangeddefense", function(eventInfo) {
    getAttrs(["BaseRangedDefense", "EquipRangedDefense", "TempRangedDefense"], function(values) {
        setAttrs({
            "TotalRangedDefense": parseValues(values, "BaseRangedDefense") + parseValues(values, "EquipRangedDefense") + parseValues(values, "TempRangedDefense")
        });
    });
});

on("sheet:opened change:basemagicdefense change:equipmagicdefense change:tempmagicdefense", function(eventInfo) {
    getAttrs(["BaseMagicDefense", "EquipMagicDefense", "TempMagicDefense"], function(values) {
        setAttrs({
            "TotalMagicDefense": parseValues(values, "BaseMagicDefense") + parseValues(values, "EquipMagicDefense") + parseValues(values, "TempMagicDefense")
        });
    });
});
//endregion


//region Melee section sheet workers
on("sheet:opened change:basemeleecriticalhit change:equipmeleecriticalhit change:tempmeleecriticalhit", function(eventInfo) {
    getAttrs(["BaseMeleeCriticalHit", "EquipMeleeCriticalHit", "TempMeleeCriticalHit"], function(values) {
        setAttrs({
            "TotalMeleeCriticalHit": parseValues(values, "BaseMeleeCriticalHit") + parseValues(values, "EquipMeleeCriticalHit") + parseValues(values, "TempMeleeCriticalHit")
        });
    });
});

on("sheet:opened change:basemeleeextraattack change:equipmeleeextraattack change:tempmeleeextraattack", function(eventInfo) {
    getAttrs(["BaseMeleeExtraAttack", "EquipMeleeExtraAttack", "TempMeleeExtraAttack"], function(values) {
        setAttrs({
            "TotalMeleeExtraAttack": parseValues(values, "BaseMeleeExtraAttack") + parseValues(values, "EquipMeleeExtraAttack") + parseValues(values, "TempMeleeExtraAttack")
        });
    });
});

on("sheet:opened change:basemeleecripple change:equipmeleecripple change:tempmeleecripple", function(eventInfo) {
    getAttrs(["BaseMeleeCripple", "EquipMeleeCripple", "TempMeleeCripple"], function(values) {
        setAttrs({
            "TotalMeleeCripple": parseValues(values, "BaseMeleeCripple") + parseValues(values, "EquipMeleeCripple") + parseValues(values, "TempMeleeCripple")
        });
    });
});

on("sheet:opened change:basemeleestun change:equipmeleestun change:tempmeleestun", function(eventInfo) {
    getAttrs(["BaseMeleeStun", "EquipMeleeStun", "TempMeleeStun"], function(values) {
        setAttrs({
            "TotalMeleeStun": parseValues(values, "BaseMeleeStun") + parseValues(values, "EquipMeleeStun") + parseValues(values, "TempMeleeStun")
        });
    });
});

on("sheet:opened change:basemeleepierce change:equipmeleepierce change:tempmeleepierce", function(eventInfo) {
    getAttrs(["BaseMeleePierce", "EquipMeleePierce", "TempMeleePierce"], function(values) {
        setAttrs({
            "TotalMeleePierce": parseValues(values, "BaseMeleePierce") + parseValues(values, "EquipMeleePierce") + parseValues(values, "TempMeleePierce")
        });
    });
});
//endregion

//region Ranged section sheet workers
on("sheet:opened change:baserangedcriticalhit change:equiprangedcriticalhit change:temprangedcriticalhit", function(eventInfo) {
    getAttrs(["BaseRangedCriticalHit", "EquipRangedCriticalHit", "TempRangedCriticalHit"], function(values) {
        setAttrs({
            "TotalRangedCriticalHit": parseValues(values, "BaseRangedCriticalHit") + parseValues(values, "EquipRangedCriticalHit") + parseValues(values, "TempRangedCriticalHit")
        });
    });
});

on("sheet:opened change:baserangedextraattack change:equiprangedextraattack change:temprangedextraattack", function(eventInfo) {
    getAttrs(["BaseRangedExtraAttack", "EquipRangedExtraAttack", "TempRangedExtraAttack"], function(values) {
        setAttrs({
            "TotalRangedExtraAttack": parseValues(values, "BaseRangedExtraAttack") + parseValues(values, "EquipRangedExtraAttack") + parseValues(values, "TempRangedExtraAttack")
        });
    });
});

on("sheet:opened change:baserangedcripple change:equiprangedcripple change:temprangedcripple", function(eventInfo) {
    getAttrs(["BaseRangedCripple", "EquipRangedCripple", "TempRangedCripple"], function(values) {
        setAttrs({
            "TotalRangedCripple": parseValues(values, "BaseRangedCripple") + parseValues(values, "EquipRangedCripple") + parseValues(values, "TempRangedCripple")
        });
    });
});

on("sheet:opened change:baserangedstun change:equiprangedstun change:temprangedstun", function(eventInfo) {
    getAttrs(["BaseRangedStun", "EquipRangedStun", "TempRangedStun"], function(values) {
        setAttrs({
            "TotalRangedStun": parseValues(values, "BaseRangedStun") + parseValues(values, "EquipRangedStun") + parseValues(values, "TempRangedStun")
        });
    });
});

on("sheet:opened change:baserangedpierce change:equiprangedpierce change:temprangedpierce", function(eventInfo) {
    getAttrs(["BaseRangedPierce", "EquipRangedPierce", "TempRangedPierce"], function(values) {
        setAttrs({
            "TotalRangedPierce": parseValues(values, "BaseRangedPierce") + parseValues(values, "EquipRangedPierce") + parseValues(values, "TempRangedPierce")
        });
    });
});
//endregion


//region Magic section sheet workers
on("sheet:opened change:basemagiccriticalhit change:equipmagiccriticalhit change:tempmagiccriticalhit", function(eventInfo) {
    getAttrs(["BaseMagicCriticalHit", "EquipMagicCriticalHit", "TempMagicCriticalHit"], function(values) {
        setAttrs({
            "TotalMagicCriticalHit": parseValues(values, "BaseMagicCriticalHit") + parseValues(values, "EquipMagicCriticalHit") + parseValues(values, "TempMagicCriticalHit")
        });
    });
});

on("sheet:opened change:basemagicextraattack change:equipmagicextraattack change:tempmagicextraattack", function(eventInfo) {
    getAttrs(["BaseMagicExtraAttack", "EquipMagicExtraAttack", "TempMagicExtraAttack"], function(values) {
        setAttrs({
            "TotalMagicExtraAttack": parseValues(values, "BaseMagicExtraAttack") + parseValues(values, "EquipMagicExtraAttack") + parseValues(values, "TempMagicExtraAttack")
        });
    });
});

on("sheet:opened change:basemagiccripple change:equipmagiccripple change:tempmagiccripple", function(eventInfo) {
    getAttrs(["BaseMagicCripple", "EquipMagicCripple", "TempMagicCripple"], function(values) {
        setAttrs({
            "TotalMagicCripple": parseValues(values, "BaseMagicCripple") + parseValues(values, "EquipMagicCripple") + parseValues(values, "TempMagicCripple")
        });
    });
});

on("sheet:opened change:basemagicstun change:equipmagicstun change:tempmagicstun", function(eventInfo) {
    getAttrs(["BaseMagicStun", "EquipMagicStun", "TempMagicStun"], function(values) {
        setAttrs({
            "TotalMagicStun": parseValues(values, "BaseMagicStun") + parseValues(values, "EquipMagicStun") + parseValues(values, "TempMagicStun")
        });
    });
});

on("sheet:opened change:basemagicpierce change:equipmagicpierce change:tempmagicpierce", function(eventInfo) {
    getAttrs(["BaseMagicPierce", "EquipMagicPierce", "TempMagicPierce"], function(values) {
        setAttrs({
            "TotalMagicPierce": parseValues(values, "BaseMagicPierce") + parseValues(values, "EquipMagicPierce") + parseValues(values, "TempMagicPierce")
        });
    });
});
//endregion


//region Skills section sheet workers
function limitToMax(skillName) {
    getAttrs([skillName, skillName.concat("_max")], function(values) {
        var skillLevel = parseValues(values, skillName)
        var skillMaxLevel = parseValues(values, skillName.concat("_max"))

        if (skillLevel > skillMaxLevel) {
            var update = {};
            update[skillName] = skillMaxLevel;
            setAttrs(update);
        }
    });
};

function setSkillValue1(skillName, mult, offset = 0) {
    getAttrs([skillName], function(values) {
        var skillLevel = parseValues(values, skillName)
        var update = {};
        update[skillName.concat("Value1")] = skillLevel * mult + offset;
        setAttrs(update);
    });
};

function setSkillValue2(skillName, mult, offset = 0) {
    getAttrs([skillName], function(values) {
        var skillLevel = parseValues(values, skillName)
        var update = {};
        update[skillName.concat("Value2")] = skillLevel * mult + offset;
        setAttrs(update);
    });
};

function updateChildrenMaxima(parentName, childrenNames) {
    var childrenMaximaNames = []
    for (i = 0; i < childrenNames.length; i++) {
        var childMaximumName = childrenNames[i].concat("_max");
        childrenMaximaNames.push(childMaximumName);
    }

    attributesList = childrenMaximaNames.concat([parentName])
    getAttrs(attributesList, function(values) {
        var parentSkillLevel = parseValues(values, parentName);
        var update = {};
        for (i = 0; i < childrenMaximaNames.length; i++) {
            update[childrenMaximaNames[i]] = parentSkillLevel;
        }
        setAttrs(update);
    });
};

on("sheet:opened change:meleearmormastery change:meleearmormastery_max", function(eventInfo) {
    var skillName = "MeleeArmorMastery"
    limitToMax(skillName);
    setSkillValue1(skillName, 10);
    updateChildrenMaxima(skillName, ["MeleeCombatMastery", "StabbingWeaponsMastery", "SlashingWeaponsMastery", "CrushingWeaponsMastery"]);
});

on("sheet:opened change:meleecombatmastery change:meleecombatmastery_max", function(eventInfo) {
    var skillName = "MeleeCombatMastery"
    limitToMax(skillName);
    setSkillValue1(skillName, 1);
    setSkillValue2(skillName, 1);
    updateChildrenMaxima(skillName, ["MeleeCripple", "MeleeCriticalHit", "MeleeExtraAttack", "MeleeStun"]);
});

on("sheet:opened change:meleecripple change:meleecripple_max", function(eventInfo) {
    var skillName = "MeleeCripple"
    limitToMax(skillName);
    setSkillValue1(skillName, 3);
});

on("sheet:opened change:meleecriticalhit change:meleecriticalhit_max", function(eventInfo) {
    var skillName = "MeleeCriticalHit"
    limitToMax(skillName);
    setSkillValue1(skillName, 3);
});

on("sheet:opened change:meleeextraattack change:meleeextraattack_max", function(eventInfo) {
    var skillName = "MeleeExtraAttack"
    limitToMax(skillName);
    setSkillValue1(skillName, 3);
});

on("sheet:opened change:meleestun change:meleestun_max", function(eventInfo) {
    var skillName = "MeleeStun"
    limitToMax(skillName);
    setSkillValue1(skillName, 3);
});

on("sheet:opened change:stabbingweaponsmastery change:stabbingweaponsmastery_max", function(eventInfo) {
    var skillName = "StabbingWeaponsMastery"
    limitToMax(skillName);
    setSkillValue1(skillName, 10);
    updateChildrenMaxima(skillName, ["Perforate", "Injure"]);
});

on("sheet:opened change:perforate change:perforate_max", function(eventInfo) {
    var skillName = "Perforate"
    limitToMax(skillName);
    setSkillValue1(skillName, 0.5, 1);
});

on("sheet:opened change:injure change:injure_max", function(eventInfo) {
    var skillName = "Injure"
    limitToMax(skillName);
    setSkillValue1(skillName, 6);
});

on("sheet:opened change:slashingweaponsmastery change:slashingweaponsmastery_max", function(eventInfo) {
    var skillName = "SlashingWeaponsMastery"
    limitToMax(skillName);
    setSkillValue1(skillName, 10);
    updateChildrenMaxima(skillName, ["Hack", "FuriousSwipes"]);
});

on("sheet:opened change:hack change:hack_max", function(eventInfo) {
    var skillName = "Hack"
    limitToMax(skillName);
    setSkillValue1(skillName, 0.5, 1);
});

on("sheet:opened change:furiousswipes change:furiousswipes_max", function(eventInfo) {
    var skillName = "FuriousSwipes"
    limitToMax(skillName);
    setSkillValue1(skillName, 6);
});

on("sheet:opened change:crushingweaponsmastery change:crushingweaponsmastery_max", function(eventInfo) {
    var skillName = "CrushingWeaponsMastery"
    limitToMax(skillName);
    setSkillValue1(skillName, 10);
    updateChildrenMaxima(skillName, ["Smash", "CrushingStun"]);
});

on("sheet:opened change:smash change:smash_max", function(eventInfo) {
    var skillName = "Smash"
    limitToMax(skillName);
    setSkillValue1(skillName, 0.5, 1);
});

on("sheet:opened change:crushingstun change:crushingstun_max", function(eventInfo) {
    var skillName = "CrushingStun"
    limitToMax(skillName);
    setSkillValue1(skillName, 6);
});

on("sheet:opened change:rangedarmormastery change:rangedarmormastery_max", function(eventInfo) {
    var skillName = "RangedArmorMastery"
    limitToMax(skillName);
    setSkillValue1(skillName, 10);
    updateChildrenMaxima(skillName, ["RangedCombatMastery", "BowsMastery", "ThrowingWeaponsMastery"]);
});

on("sheet:opened change:rangedcombatmastery change:rangedcombatmastery_max", function(eventInfo) {
    var skillName = "RangedCombatMastery"
    limitToMax(skillName);
    setSkillValue1(skillName, 1);
    setSkillValue2(skillName, 1);
    updateChildrenMaxima(skillName, ["RangedCriticalHit", "RangedCripple", "RangedExtraAttack", "RangedPierce", "RangedStun"]);
});

on("sheet:opened change:rangedcriticalhit change:rangedcriticalhit_max", function(eventInfo) {
    var skillName = "RangedCriticalHit"
    limitToMax(skillName);
    setSkillValue1(skillName, 3);
});

on("sheet:opened change:rangedcripple change:rangedcripple_max", function(eventInfo) {
    var skillName = "RangedCripple"
    limitToMax(skillName);
    setSkillValue1(skillName, 3);
});

on("sheet:opened change:rangedextraattack change:rangedextraattack_max", function(eventInfo) {
    var skillName = "RangedExtraAttack"
    limitToMax(skillName);
    setSkillValue1(skillName, 3);
});

on("sheet:opened change:rangedpierce change:rangedpierce_max", function(eventInfo) {
    var skillName = "RangedPierce"
    limitToMax(skillName);
    setSkillValue1(skillName, 5);
});

on("sheet:opened change:rangedstun change:rangedstun_max", function(eventInfo) {
    var skillName = "RangedStun"
    limitToMax(skillName);
    setSkillValue1(skillName, 3);
});

on("sheet:opened change:bowsmastery change:bowsmastery_max", function(eventInfo) {
    var skillName = "BowsMastery"
    limitToMax(skillName);
    setSkillValue1(skillName, 10);
    updateChildrenMaxima(skillName, ["TakeAim", "LongRange", "PinDown"]);
});

on("sheet:opened change:takeaim change:takeaim_max", function(eventInfo) {
    var skillName = "TakeAim"
    limitToMax(skillName);
    setSkillValue1(skillName, 0.5, 1);
});

on("sheet:opened change:longrange change:longrange_max", function(eventInfo) {
    var skillName = "LongRange"
    limitToMax(skillName);
    setSkillValue1(skillName, 0.3, 1);
});

on("sheet:opened change:pindown change:pindown_max", function(eventInfo) {
    var skillName = "PinDown"
    limitToMax(skillName);
    setSkillValue1(skillName, 7);
});

on("sheet:opened change:throwingweaponsmastery change:throwingweaponsmastery_max", function(eventInfo) {
    var skillName = "ThrowingWeaponsMastery"
    limitToMax(skillName);
    setSkillValue1(skillName, 10);
    updateChildrenMaxima(skillName, ["PreciseHit", "Flurry", "AimForTheEyes"]);
});

on("sheet:opened change:precisehit change:precisehit_max", function(eventInfo) {
    var skillName = "PreciseHit"
    limitToMax(skillName);
    setSkillValue1(skillName, 0.5, 1);
});

on("sheet:opened change:flurry change:flurry_max", function(eventInfo) {
    var skillName = "Flurry"
    limitToMax(skillName);
    setSkillValue1(skillName, 0.5, -2);
});

on("sheet:opened change:aimfortheeyes change:aimfortheeyes_max", function(eventInfo) {
    var skillName = "AimForTheEyes"
    limitToMax(skillName);
    setSkillValue1(skillName, 0.4, 1);
});

on("sheet:opened change:magicarmormastery change:magicarmormastery_max", function(eventInfo) {
    var skillName = "MagicArmorMastery"
    limitToMax(skillName);
    setSkillValue1(skillName, 10);
    updateChildrenMaxima(skillName, ["MagicAdept", "MagicWeaponMastery", "BlackMagicMastery", "GreyMagicMastery", "WhiteMagicMastery", ]);
});

on("sheet:opened change:magicadept change:magicadept_max", function(eventInfo) {
    var skillName = "MagicAdept"
    limitToMax(skillName);
    setSkillValue1(skillName, 2);
});

on("sheet:opened change:magicweaponmastery change:magicweaponmastery_max", function(eventInfo) {
    var skillName = "MagicWeaponMastery"
    limitToMax(skillName);
    setSkillValue1(skillName, 10);
});

on("sheet:opened change:blackmagicmastery change:blackmagicmastery_max", function(eventInfo) {
    var skillName = "BlackMagicMastery"
    limitToMax(skillName);
    setSkillValue1(skillName, 1);
    updateChildrenMaxima(skillName, ["DemonicExpert", "ForcesExpert", "NecromancyExpert"]);
});

on("sheet:opened change:demonicexpert change:demonicexpert_max", function(eventInfo) {
    var skillName = "DemonicExpert"
    limitToMax(skillName);
    setSkillValue1(skillName, 1);
});

on("sheet:opened change:forcesexpert change:forcesexpert_max", function(eventInfo) {
    var skillName = "ForcesExpert"
    limitToMax(skillName);
    setSkillValue1(skillName, 1);
});

on("sheet:opened change:necromancyexpert change:necromancyexpert_max", function(eventInfo) {
    var skillName = "NecromancyExpert"
    limitToMax(skillName);
    setSkillValue1(skillName, 1);
});

on("sheet:opened change:greymagicmastery change:greymagicmastery_max", function(eventInfo) {
    var skillName = "GreyMagicMastery"
    limitToMax(skillName);
    setSkillValue1(skillName, 1);
    updateChildrenMaxima(skillName, ["DimensionExpert", "MindExpert", "NatureExpert"]);
});

on("sheet:opened change:dimensionexpert change:dimensionexpert_max", function(eventInfo) {
    var skillName = "DimensionExpert"
    limitToMax(skillName);
    setSkillValue1(skillName, 1);
});

on("sheet:opened change:mindexpert change:mindexpert_max", function(eventInfo) {
    var skillName = "MindExpert"
    limitToMax(skillName);
    setSkillValue1(skillName, 1);
});

on("sheet:opened change:natureexpert change:natureexpert_max", function(eventInfo) {
    var skillName = "NatureExpert"
    limitToMax(skillName);
    setSkillValue1(skillName, 1);
});

on("sheet:opened change:whitemagicmastery change:whitemagicmastery_max", function(eventInfo) {
    var skillName = "WhiteMagicMastery"
    limitToMax(skillName);
    setSkillValue1(skillName, 1);
    updateChildrenMaxima(skillName, ["CreationExpert", "DivineExpert", "LifeExpert"]);
});

on("sheet:opened change:creationexpert change:creationexpert_max", function(eventInfo) {
    var skillName = "CreationExpert"
    limitToMax(skillName);
    setSkillValue1(skillName, 1);
});

on("sheet:opened change:divineexpert change:divineexpert_max", function(eventInfo) {
    var skillName = "DivineExpert"
    limitToMax(skillName);
    setSkillValue1(skillName, 1);
});

on("sheet:opened change:lifeexpert change:lifeexpert_max", function(eventInfo) {
    var skillName = "LifeExpert"
    limitToMax(skillName);
    setSkillValue1(skillName, 1);
});

on("sheet:opened change:control change:control_max", function(eventInfo) {
    var skillName = "Control"
    limitToMax(skillName);
    setSkillValue1(skillName, 1);
    updateChildrenMaxima(skillName, ["Counterspell", "Dash", "Distract", "Taunt"]);
});

on("sheet:opened change:counterspell change:counterspell_max", function(eventInfo) {
    var skillName = "Counterspell"
    limitToMax(skillName);
    setSkillValue1(skillName, 1);
});

on("sheet:opened change:dash change:dash_max", function(eventInfo) {
    var skillName = "Dash"
    limitToMax(skillName);

    getAttrs([skillName], function(values) {
        var skillLevel = parseValues(values, skillName)
        var update = {};
        update[skillName.concat("Value1")] = Math.min(100, skillLevel * 15);
        update[skillName.concat("Value2")] = Math.max(0, skillLevel * 15 - 100);
        setAttrs(update);
    });
});

on("sheet:opened change:distract change:distract_max", function(eventInfo) {
    var skillName = "Distract"
    limitToMax(skillName);
    setSkillValue1(skillName, 1);
});

on("sheet:opened change:taunt change:taunt_max", function(eventInfo) {
    var skillName = "Taunt"
    limitToMax(skillName);
    setSkillValue1(skillName, 15);
});

on("sheet:opened change:defense change:defense_max", function(eventInfo) {
    var skillName = "Defense"
    limitToMax(skillName);
    setSkillValue1(skillName, 1);
    updateChildrenMaxima(skillName, ["ExcellentReflexes", "PredictAction", "ResistAttack", "SoakDamage"]);
});

on("sheet:opened change:excellentreflexes change:excellentreflexes_max", function(eventInfo) {
    var skillName = "ExcellentReflexes"
    limitToMax(skillName);

    getAttrs([skillName], function(values) {
        var skillLevel = parseValues(values, skillName)
        var update = {};

        switch (skillLevel) {
            case 0:
                update[skillName.concat("Value1")] = 0;
                update[skillName.concat("Value2")] = 0;
                update[skillName.concat("Value3")] = 0;
                break;
            case 1:
                update[skillName.concat("Value1")] = 1;
                update[skillName.concat("Value2")] = 0;
                update[skillName.concat("Value3")] = 0;
                break;
            case 2:
                update[skillName.concat("Value1")] = 1;
                update[skillName.concat("Value2")] = 1;
                update[skillName.concat("Value3")] = 0;
                break;
            case 3:
                update[skillName.concat("Value1")] = 1;
                update[skillName.concat("Value2")] = 1;
                update[skillName.concat("Value3")] = 1;
                break;
            case 4:
                update[skillName.concat("Value1")] = 2;
                update[skillName.concat("Value2")] = 1;
                update[skillName.concat("Value3")] = 1;
                break;
            case 5:
                update[skillName.concat("Value1")] = 2;
                update[skillName.concat("Value2")] = 2;
                update[skillName.concat("Value3")] = 1;
                break;
            case 6:
                update[skillName.concat("Value1")] = 2;
                update[skillName.concat("Value2")] = 2;
                update[skillName.concat("Value3")] = 2;
                break;
            case 7:
                update[skillName.concat("Value1")] = 3;
                update[skillName.concat("Value2")] = 2;
                update[skillName.concat("Value3")] = 2;
                break;
            case 8:
                update[skillName.concat("Value1")] = 3;
                update[skillName.concat("Value2")] = 3;
                update[skillName.concat("Value3")] = 2;
                break;
            case 9:
                update[skillName.concat("Value1")] = 3;
                update[skillName.concat("Value2")] = 3;
                update[skillName.concat("Value3")] = 3;
                break;
            case 10:
                update[skillName.concat("Value1")] = 4;
                update[skillName.concat("Value2")] = 4;
                update[skillName.concat("Value3")] = 4;
                break;
            default:
                update[skillName.concat("Value1")] = 0;
                update[skillName.concat("Value2")] = 0;
                update[skillName.concat("Value3")] = 0;
        }

        setAttrs(update);
    });
});

on("sheet:opened change:predictaction change:predictaction_max", function(eventInfo) {
    var skillName = "PredictAction"
    limitToMax(skillName);
    setSkillValue1(skillName, 1);
});

on("sheet:opened change:resistattack change:resistattack_max", function(eventInfo) {
    var skillName = "ResistAttack"
    limitToMax(skillName);
    setSkillValue1(skillName, 1);
});

on("sheet:opened change:soakdamage change:soakdamage_max", function(eventInfo) {
    var skillName = "SoakDamage"
    limitToMax(skillName);
    setSkillValue1(skillName, 3);
    setSkillValue2(skillName, 3);
});

on("sheet:opened change:offense change:offense_max", function(eventInfo) {
    var skillName = "Offense"
    limitToMax(skillName);
    setSkillValue1(skillName, 1);
    setSkillValue2(skillName, 1);
    updateChildrenMaxima(skillName, ["Counterattack", "CoupDeGrace", "DualWieldingMastery", "EnergyDrain"]);
});

on("sheet:opened change:counterattack change:counterattack_max", function(eventInfo) {
    var skillName = "Counterattack"
    limitToMax(skillName);
    setSkillValue1(skillName, 1);
});

on("sheet:opened change:coupdegrace change:coupdegrace_max", function(eventInfo) {
    var skillName = "CoupDeGrace"
    limitToMax(skillName);
    setSkillValue1(skillName, 2);
});

on("sheet:opened change:dualwieldingmastery change:dualwieldingmastery_max", function(eventInfo) {
    var skillName = "DualWieldingMastery"
    limitToMax(skillName);
    setSkillValue1(skillName, 1);
    setSkillValue2(skillName, 9);
});

on("sheet:opened change:energydrain change:energydrain_max", function(eventInfo) {
    var skillName = "EnergyDrain"
    limitToMax(skillName);
    setSkillValue1(skillName, 3);
});
//endregion


//region Base stats updaters based on skills
on("sheet:opened change:meleecriticalhit change:meleecombatmastery", function(eventInfo) {
    getAttrs(["MeleeCriticalHit", "MeleeCombatMastery"], function(values) {
        var MeleeCriticalHitLevel = parseValues(values, "MeleeCriticalHit")
        var MeleeCombatMasteryLevel = parseValues(values, "MeleeCombatMastery")
        var update = {};
        update["BaseMeleeCriticalHit"] = MeleeCriticalHitLevel * 3 + MeleeCombatMasteryLevel;
        setAttrs(update);
    });
});

on("sheet:opened change:meleeextraattack change:meleecombatmastery", function(eventInfo) {
    getAttrs(["MeleeExtraAttack", "MeleeCombatMastery"], function(values) {
        var MeleeExtraAttackLevel = parseValues(values, "MeleeExtraAttack")
        var MeleeCombatMasteryLevel = parseValues(values, "MeleeCombatMastery")
        var update = {};
        update["BaseMeleeExtraAttack"] = MeleeExtraAttackLevel * 3 + MeleeCombatMasteryLevel;
        setAttrs(update);
    });
});

on("sheet:opened change:meleecripple", function(eventInfo) {
    getAttrs(["MeleeCripple"], function(values) {
        var MeleeCrippleLevel = parseValues(values, "MeleeCripple")
        var update = {};
        update["BaseMeleeCripple"] = MeleeCrippleLevel * 3;
        setAttrs(update);
    });
});

on("sheet:opened change:meleestun", function(eventInfo) {
    getAttrs(["MeleeStun"], function(values) {
        var MeleeStunLevel = parseValues(values, "MeleeStun")
        var update = {};
        update["BaseMeleeStun"] = MeleeStunLevel * 3;
        setAttrs(update);
    });
});

on("sheet:opened change:rangedcriticalhit change:rangedcombatmastery", function(eventInfo) {
    getAttrs(["RangedCriticalHit", "RangedCombatMastery"], function(values) {
        var RangedCriticalHitLevel = parseValues(values, "RangedCriticalHit")
        var RangedCombatMasteryLevel = parseValues(values, "RangedCombatMastery")
        var update = {};
        update["BaseRangedCriticalHit"] = RangedCriticalHitLevel * 3 + RangedCombatMasteryLevel;
        setAttrs(update);
    });
});

on("sheet:opened change:rangedextraattack change:rangedcombatmastery", function(eventInfo) {
    getAttrs(["RangedExtraAttack", "RangedCombatMastery"], function(values) {
        var RangedExtraAttackLevel = parseValues(values, "RangedExtraAttack")
        var RangedCombatMasteryLevel = parseValues(values, "RangedCombatMastery")
        var update = {};
        update["BaseRangedExtraAttack"] = RangedExtraAttackLevel * 3 + RangedCombatMasteryLevel;
        setAttrs(update);
    });
});

on("sheet:opened change:rangedcripple", function(eventInfo) {
    getAttrs(["RangedCripple"], function(values) {
        var RangedCrippleLevel = parseValues(values, "RangedCripple")
        var update = {};
        update["BaseRangedCripple"] = RangedCrippleLevel * 3;
        setAttrs(update);
    });
});

on("sheet:opened change:rangedstun", function(eventInfo) {
    getAttrs(["RangedStun"], function(values) {
        var RangedStunLevel = parseValues(values, "RangedStun")
        var update = {};
        update["BaseRangedStun"] = RangedStunLevel * 3;
        setAttrs(update);
    });
});

on("sheet:opened change:rangedpierce", function(eventInfo) {
    getAttrs(["RangedPierce"], function(values) {
        var RangedPierceLevel = parseValues(values, "RangedPierce")
        var update = {};
        update["BaseRangedPierce"] = RangedPierceLevel * 5;
        setAttrs(update);
    });
});

//endregion

//region


on("sheet:opened change:baselifepoints change:equiplifepoints change:templifepoints", function(eventInfo) {
    getAttrs(["BaseLifePoints", "EquipLifePoints", "TempLifePoints"], function(values) {
        setAttrs({
            "CurrentLifePoints_max": parseValues(values, "BaseLifePoints") + parseValues(values, "EquipLifePoints") + parseValues(values, "TempLifePoints")
        });
    });
});

on("sheet:opened change:basestaminapoints change:equipstaminapoints change:tempstaminapoints", function(eventInfo) {
    getAttrs(["BaseStaminaPoints", "EquipStaminaPoints", "TempStaminaPoints"], function(values) {
        setAttrs({
            "CurrentStaminaPoints_max": parseValues(values, "BaseStaminaPoints") + parseValues(values, "EquipStaminaPoints") + parseValues(values, "TempStaminaPoints")
        });
    });
});

on("sheet:opened change:basemanapoints change:equipmanapoints change:tempmanapoints", function(eventInfo) {
    getAttrs(["BaseManaPoints", "EquipManaPoints", "TempManaPoints"], function(values) {
        setAttrs({
            "CurrentManaPoints_max": parseValues(values, "BaseManaPoints") + parseValues(values, "EquipManaPoints") + parseValues(values, "TempManaPoints")
        });
    });
});

// Here the LP, SP and MP will be updateable and linked to the tokens

//endregion

//region
// Here will be the level up related things. 
//endregion

//region



// this takes care of the Equipment. Needs to be linked to the Equip stats
//endregion


//region Attacking, Using Skills and Casting Spells

// This will check if the conditions are respected for the desired action. These are not exhaustive
// For all : How many action points are left and is the character's status allowing them to do the action (are they stunned, for example).
// Attacking : Weapon range
// Using a skill: Reaction, on attack, on hit? Enough SP?
// Casting a spell : Starting or continuing? Concentration? Enough MP? Target still valid?


// This will consume Action Points, SP and MP


// This will perform rolls and apply effects