import {intersection} from "./module/config.js";
import item_sheet from "./module/sheets/item_sheet.js";

Hooks.once("init", function() {
    console.log("Intersection | Initializing system");
    
    CONFIG.intersection = intersection;

    console.log("Intersection | Unregister core sheets ");
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("intersection", item_sheet, {makeDefault: true});
});