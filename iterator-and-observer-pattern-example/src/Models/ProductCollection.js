import Product from "./Product";
import Collection from "./Collection";
import ProductIterator from "./ProductIterator";

class ProductCollection extends Collection{
    constructor(){
        super();
        this.productList = new Array();
    }

    addProduct(id, price=0, title="", category="", brand="", num_of_purchases=0){
        let product = new Product(id, price, title, category, brand, num_of_purchases);
        this.productList.push(product);
    }

    createIterator(){
        return new ProductIterator(this.productList);
    }

}

export default ProductCollection;