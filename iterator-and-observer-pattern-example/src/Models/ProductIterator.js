import Iterator from "./Iterator";

class ProductIterator extends Iterator{
    constructor(productList){
        super();
        this._index = 0;
        this._productList = productList;
    }

    next(){
        let product = this._productList[this._index];
        this._index++;
        return product;
    }

    hasNext() {
        return !(this._index >= this._productList.length);
    }

    reset(){
        this._index = 0;
    }
}

export default ProductIterator;