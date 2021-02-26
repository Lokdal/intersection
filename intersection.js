import {intersection} from "./module/config.js";
import item_sheet from "./module/sheets/item_sheet.js";
import actor_sheet from "./module/sheets/actor_sheet.js";

async function preloadHandlebarsTemplates() {
    const templatePaths = [
        "systems/intersection/templates/partials/weapon_card.hbs"
    ];
    return loadTemplates(templatePaths);
};

Hooks.once("init", function() {
    console.log("Intersection | Initializing system");
    
    CONFIG.intersection = intersection;

    console.log("Intersection | Unregister Foundry sheets");
    Items.unregisterSheet("core", ItemSheet);
    Actors.unregisterSheet("core", ActorSheet);

    console.log("Intersection | Register Intersection sheets");
    Items.registerSheet("intersection", item_sheet, {makeDefault: true});
    Actors.registerSheet("intersection", actor_sheet, {makeDefault: true});

    console.log("Intersection | Load Handlebars Templates");
    preloadHandlebarsTemplates();

    Handlebars.registerHelper("compare", function(a, operator, b){
        if (arguments.length < 3) {
            throw new Error('{{compare}} expects 4 arguments');
        }
        
        var result;
        switch (operator) {
            case '==':
                result = a == b;
                break;
            case '===':
                result = a === b;
                break;
            case '!=':
                result = a != b;
                break;
            case '!==':
                result = a !== b;
                break;
            case '<':
                result = a < b;
                break;
            case '>':
                result = a > b;
                break;
            case '<=':
                result = a <= b;
                break;
            case '>=':
                result = a >= b;
                break;
            case 'typeof':
                result = typeof a === b;
                break;
            default: {
                throw new Error('helper {{compare}}: invalid operator: `' + operator + '`');
            }
        }

        return result;
    });
})
