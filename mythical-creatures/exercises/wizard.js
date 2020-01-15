class Wizard {
    constructor(wizObj) {
        const {bearded, name} = wizObj;
        this.name = name;
        this.isRested = true;
        this.numSpells = 0;
        if (bearded === undefined)
            this.bearded = true;
        else this.bearded = bearded;
    }
    incantation(spells) {
        return spells.toUpperCase();
    }
    cast() {
        this.numSpells++;
        if (this.numSpells >= 3) {
            this.isRested = false;
            return "I SHALL NOT CAST!";
        }
        return "MAGIC BULLET";
    }
}
module.exports = Wizard;