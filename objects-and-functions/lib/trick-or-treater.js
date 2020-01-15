class TrickOrTreater{
    constructor(costume,bag) {
        this.costume=costume;
        this.bag=bag;
    }
    get dressedUpAs(){
        return this.costume.style;
    }
    get hasCandy(){
        return this.bag.isBagEmpty();
    }
}
module.exports=TrickOrTreater;