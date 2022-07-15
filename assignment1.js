function Purchase( price){
    this.price = price
    this.calculateFruitCost = function(name,quantity){
        var totalPrice = this.price * quantity
        return `${quantity} ${name} for kes ${totalPrice}`
    }

}
var orange = new Purchase(20)
console.log(orange.calculateFruitCost('orange', 2));

class KioskCalc{
    constructor(fruit, quantity){
        this.fruit = fruit
        this.quantity = quantity
        this.fruitPriceList = {"orange": 20, "apple": 30, "pear": 20 };
        this.totalCost = function () {
        return `${quantity} ${fruit} for KES ${quantity * this.price}`
        }
    }
}
    KioskCalc.prototype.price = 40;
    var shop = new KioskCalc('apple',7);
    console.log(shop.totalCost());