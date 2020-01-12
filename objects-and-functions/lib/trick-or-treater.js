class TrickOrTreater{
    constructor(costume) {
        this.costume=costume;
    }
    get dressedUpAs(){
        return this.costume.style;
    }
}
module.exports=TrickOrTreater;