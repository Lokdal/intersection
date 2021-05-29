export default class actor_sheet extends ActorSheet {

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            template: `systems/intersection/templates/sheets/actor_sheet.hbs`,
            width: 880,
            height: 800,
            classes: ["intersection", "sheet", "actor"]
        });
    };

    itemContextMenu = [
        {
            name: "Edit",
            icon: '<i class="fas fa-edit"></i>',
            callback: element => {
                const item = this.actor.getOwnedItem(element.data("item-id"));
                item.sheet.render(true);
            }
        },
        {
            name: "Delete",
            icon: '<i class="fas fa-trash"></i>',
            callback: element => {
                const item = this.actor.delete(element.data("item-id"))
            }
        }
    ];

    
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
        data.ring1 = data.items.filter(function(item) {return item.data.equipmentSlots == "ring1"});
        data.ring2 = data.items.filter(function(item) {return item.data.equipmentSlots == "ring2"});
        data.ring3 = data.items.filter(function(item) {return item.data.equipmentSlots == "ring3"});
        data.ring4 = data.items.filter(function(item) {return item.data.equipmentSlots == "ring4"});
        data.charm1 = data.items.filter(function(item) {return item.data.equipmentSlots == "charm1"});
        data.charm2 = data.items.filter(function(item) {return item.data.equipmentSlots == "charm2"});
        data.amulet = data.items.filter(function(item) {return item.data.equipmentSlots == "amulet"});
        data.skills = data.items.filter(function(item) {return item.data.itemSubtype == "skill"});
        data.spells = data.items.filter(function(item) {return item.data.itemSubtype == "spell"});
        data.belt = data.items.filter(function(item) {return item.data.equipmentSlots == "belt"});
        data.backpack = data.items.filter(function(item) {return item.data.equipmentSlots == "backpack"});
        data.spellbook = data.items.filter(function(item) {return item.data.equipmentSlots == "spellbook"});
        
        return data
    };

    activateListeners(html) {
        new ContextMenu(html, ".weapon-card", this.itemContextMenu);
        new ContextMenu(html, ".armor-card", this.itemContextMenu);
        super.activateListeners(html);
    }


};