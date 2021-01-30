export default class item_sheet extends ItemSheet {

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            width: 530,
            height: 340,
            classes: ["intersection", "sheet", "item"]
        });
    };

    get template() {
        return `systems/intersection/templates/sheets/${this.item.data.type}_sheet.html`
    };

    getData() {
        const data = super.getData();
        data.config = CONFIG.intersection;
        return data
    };
};