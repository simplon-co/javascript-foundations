class Bag {

    constructor() {
        this.empty = true;
        this.count = 0;
        this.candies = [];
    }
     fill(candy){
        this.candies.push(candy);
        this.count = this.candies.length;
     }

     contains(type){
        for (let i=0; i<this.candies.length ; i++) {
            return this.candies[i].type == type;
        }
     }
}

module.exports = Bag;