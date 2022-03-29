import {intersection} from "./module/config.js";
import item_sheet from "./module/sheets/item_sheet.js";
import actor_sheet from "./module/sheets/actor_sheet.js";
import actor_class from "./module/actor_class.js";
// import form_application from "./module/form_application.js";

async function preloadHandlebarsTemplates() {
    const templatePaths = [
        "systems/intersection/templates/partials/actor_points_table.hbs",
        "systems/intersection/templates/partials/actor_stats_table.hbs",
        "systems/intersection/templates/partials/actor_equip_table.hbs",
        "systems/intersection/templates/partials/actor_skills_table.hbs",
        "systems/intersection/templates/partials/weapon_card.hbs",
        "systems/intersection/templates/partials/armor_card.hbs",
        "systems/intersection/templates/partials/accessory_card.hbs",
        "systems/intersection/templates/partials/jewelry_card.hbs",
        "systems/intersection/templates/partials/skill_card.hbs",
        "systems/intersection/templates/partials/spell_card.hbs",
        "systems/intersection/templates/partials/actor_sheet_tabs/actor_sheet_tab_main.hbs"
    ];
    return loadTemplates(templatePaths);
};

Hooks.once("init", function() {
    console.log("Intersection | Initializing system");
    
    CONFIG.intersection = intersection;
    CONFIG.Actor.entityClass = actor_class;

    console.log("Intersection | Unregister Foundry sheets");
    Items.unregisterSheet("core", ItemSheet);
    Actors.unregisterSheet("core", ActorSheet);

    console.log("Intersection | Register Intersection sheets");
    Items.registerSheet("intersection", item_sheet, {makeDefault: true});
    Actors.registerSheet("intersection", actor_sheet, {makeDefault: true});


    console.log("Intersection | Load Handlebars Templates");
    preloadHandlebarsTemplates();

    // This is a helper function to be able to compare values in Handlebars
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
