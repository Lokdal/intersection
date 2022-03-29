export default class actor_class extends Actor {

    
    /** @override
     * Prepare data for the actor. Calling the super version of this executes
     * the following, in order: data reset (to clear active effects),
     * prepareBaseData(), prepareEmbeddedDocuments() (including active effects),
     * prepareDerivedData().*/

    prepareData() {
        super.prepareData();
    }


    /** @override 
     * Augment the basic actor data with additional dynamic data. Typically,
     * you'll want to handle most of your calculated/derived data in this step.
     * Data calculated in this step should generally not exist in template.json
     * (such as ability modifiers rather than ability scores) and should be
     * available both inside and outside of character sheets (such as if an actor
     * is queried and has a roll executed directly from it).*/
    prepareDerivedData() {
        super.prepareDerivedData();
        const actorData = this.data;
        if (actorData.type === "creature") {
            this._prepareCreatureData(actorData);
        };
    };

    _prepareCreatureData(actorData) {
        const data = actorData.data;
        data.melee_off.total = Number(data.melee_off.base) + Number(data.melee_off.equip) + Number(data.melee_off.temp);
        data.melee_def.total = Number(data.melee_def.base) + Number(data.melee_def.equip) + Number(data.melee_def.temp);
        data.melee_crit.total = Number(data.melee_crit.base) + Number(data.melee_crit.equip) + Number(data.melee_crit.temp);
        data.melee_extraAtt.total = Number(data.melee_extraAtt.base) + Number(data.melee_extraAtt.equip) + Number(data.melee_extraAtt.temp);
        data.melee_cripple.total = Number(data.melee_cripple.base) + Number(data.melee_cripple.equip) + Number(data.melee_cripple.temp);
        data.melee_stun.total = Number(data.melee_stun.base) + Number(data.melee_stun.equip) + Number(data.melee_stun.temp);
        data.melee_pierce.total = Number(data.melee_pierce.base) + Number(data.melee_pierce.equip) + Number(data.melee_pierce.temp);
        data.melee_dodge.total = Number(data.melee_dodge.base) + Number(data.melee_dodge.equip) + Number(data.melee_dodge.temp);
        data.melee_soak.total = Number(data.melee_soak.base) + Number(data.melee_soak.equip) + Number(data.melee_soak.temp);

        data.ranged_off.total = Number(data.ranged_off.base) + Number(data.ranged_off.equip) + Number(data.ranged_off.temp);
        data.ranged_def.total = Number(data.ranged_def.base) + Number(data.ranged_def.equip) + Number(data.ranged_def.temp);
        data.ranged_crit.total = Number(data.ranged_crit.base) + Number(data.ranged_crit.equip) + Number(data.ranged_crit.temp);
        data.ranged_extraAtt.total = Number(data.ranged_extraAtt.base) + Number(data.ranged_extraAtt.equip) + Number(data.ranged_extraAtt.temp);
        data.ranged_cripple.total = Number(data.ranged_cripple.base) + Number(data.ranged_cripple.equip) + Number(data.ranged_cripple.temp);
        data.ranged_stun.total = Number(data.ranged_stun.base) + Number(data.ranged_stun.equip) + Number(data.ranged_stun.temp);
        data.ranged_pierce.total = Number(data.ranged_pierce.base) + Number(data.ranged_pierce.equip) + Number(data.ranged_pierce.temp);
        data.ranged_dodge.total = Number(data.ranged_dodge.base) + Number(data.ranged_dodge.equip) + Number(data.ranged_dodge.temp);
        data.ranged_soak.total = Number(data.ranged_soak.base) + Number(data.ranged_soak.equip) + Number(data.ranged_soak.temp);

        data.magic_off.total = Number(data.magic_off.base) + Number(data.magic_off.equip) + Number(data.magic_off.temp);
        data.magic_def.total = Number(data.magic_def.base) + Number(data.magic_def.equip) + Number(data.magic_def.temp);
        data.magic_crit.total = Number(data.magic_crit.base) + Number(data.magic_crit.equip) + Number(data.magic_crit.temp);
        data.magic_extraAtt.total = Number(data.magic_extraAtt.base) + Number(data.magic_extraAtt.equip) + Number(data.magic_extraAtt.temp);
        data.magic_cripple.total = Number(data.magic_cripple.base) + Number(data.magic_cripple.equip) + Number(data.magic_cripple.temp);
        data.magic_stun.total = Number(data.magic_stun.base) + Number(data.magic_stun.equip) + Number(data.magic_stun.temp);
        data.magic_pierce.total = Number(data.magic_pierce.base) + Number(data.magic_pierce.equip) + Number(data.magic_pierce.temp);
        data.magic_dodge.total = Number(data.magic_dodge.base) + Number(data.magic_dodge.equip) + Number(data.magic_dodge.temp);
        data.magic_soak.total = Number(data.magic_soak.base) + Number(data.magic_soak.equip) + Number(data.magic_soak.temp);
    };


    getRollData() {
        const data = super.getRollData();
        return data;
    };

}