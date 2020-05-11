class Product{
    constructor(id, price=0, title="", category="", brand="", num_of_purchases=0){
        this._id = id;
        this._price = price;
        this._title = title;
        this._category = category;
        this._brand = brand;
        this._num_of_purchases = num_of_purchases;
        this._observers = new Array();
    }

    attach(observer){
        this._observers.push(observer);
    }

    notifyAllObservers(){
        this._observers.map(function (observer, key) {
            observer.update();
        })
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
        this.notifyAllObservers();
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get category() {
        return this._category;
    }

    set category(value) {
        this._category = value;
    }

    get brand() {
        return this._brand;
    }

    set brand(value) {
        this._brand = value;
    }
    get num_of_purchases() {
        return this._num_of_purchases;
    }

    set num_of_purchases(value) {
        this._num_of_purchases = value;
    }
}

export default Product;