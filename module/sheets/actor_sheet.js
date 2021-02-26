export default class actor_sheet extends ActorSheet {

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            width: 880,
            height: 800,
            classes: ["intersection", "sheet", "actor"]
        });
    };
    get template() {
        return `systems/intersection/templates/sheets/${this.actor.data.type}_sheet.hbs`
    };
    getData() {
        const data = super.getData();
        data.config = CONFIG.intersection;
        data.mainHand = data.items.filter(function(item) {return item.data.equipmentSlots == "mainHand"});
        data.offHand = data.items.filter(function(item) {return item.data.equipmentSlots == "offHand"});
        data.armor = data.items.filter(function(item) {return item.data.equipmentSlots == "armor"});
        data.helm = data.items.filter(function(item) {return item.data.equipmentSlots == "helm"});
        data.cape = data.items.filter(function(item) {return item.data.equipmentSlots == "cape"});
        data.gloves = data.items.filter(function(item) {return item.data.equipmentSlots == "gloves"});
        data.boots = data.items.filter(function(item) {return item.data.equipmentSlots == "boots"});
        data.ring = data.items.filter(function(item) {return item.data.equipmentSlots == "ring"});
        data.charm = data.items.filter(function(item) {return item.data.equipmentSlots == "charm"});
        data.amulet = data.items.filter(function(item) {return item.data.equipmentSlots == "amulet"});
        data.belt = data.items.filter(function(item) {return item.data.equipmentSlots == "belt"});
        data.backpack = data.items.filter(function(item) {return item.data.equipmentSlots == "backpack"});
        return data
    };
};