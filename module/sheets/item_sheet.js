export default class item_sheet extends ItemSheet {
    get template() {
        return `systems/intersection/templates/sheets/${this.item.data.type}_sheet.html`
    };

    getData() {
        const data = super.getData();
        data.config = CONFIG.intersection;
        return data
    };
};