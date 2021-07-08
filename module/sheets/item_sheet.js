export default class item_sheet extends ItemSheet {

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            width: 600,
            height: 340,
            classes: ["intersection", "sheet", "item"]
        });
    };

    get template() {
        return `systems/intersection/templates/sheets/${this.item.data.type}_sheet.hbs`
    };

    getData() {
        const data = super.getData();
        data.config = CONFIG.intersection;
        return data
    };

    
    activateListeners(html) {
        html.find(".effect-control").click(this._onManageActiveEffect.bind(this));
        super.activateListeners(html);        
    };

    _onManageActiveEffect(event) {
        event.preventDefault();

        const element = event.currentTarget;
        const list_effects = $(element).parents(".effect");

        switch (element.dataset["action"]) {
            case "create":
                return this._createActiveEffect();

            case "edit":
                const id = list_effects.data("effectId");
                const effect = this.item.effects.get(id);
                if (!effect) {
                    return id
                }
                return effect.sheet.render(true);
            case "delete": {
                return this.item.deleteEmbeddedEntity("ActiveEffect", list_effects.data("effectId"));
            }
        }
    };
    
    _createActiveEffect() {

    /*
        mode values
        0: custom
        1: multiply
        2: add
        5: override

                const createData = {
            label: (data.name).concat("", " (Equipped)"),
            changes: data.changes,
            duration: {},
            transfer: true,
        };
*/
        
        const createData = {
            label: "lol",
            changes: [{"key": "data.melee_off.equip", "mode": 1, "value":5}],
            duration: {},
            transfer: false,
        };

        return ActiveEffect.create(createData, this.item);
    }
        
};