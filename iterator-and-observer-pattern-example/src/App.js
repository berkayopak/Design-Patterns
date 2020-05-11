import React from 'react';
import './App.css';
import Product from "./Models/Product";
import ProductCollection from "./Models/ProductCollection";
import DiscountObserver from "./Models/DiscountObserver";

class App extends React.Component{
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.nextProduct = this.nextProduct.bind(this);
    this.favoriteProduct = this.favoriteProduct.bind(this);
    this.makeDiscount = this.makeDiscount.bind(this);
  }

  componentDidMount() {
    let productCollection = new ProductCollection();

    productCollection.addProduct(1,25, "Dummy Product 1", "Dummy Category", "Dummy Brand", 999);
    productCollection.addProduct(2,50, "Dummy Product 2", "Dummy Category", "Dummy Brand", 888);
    productCollection.addProduct(3,35, "Dummy Product 3", "Dummy Category", "Dummy Brand", 777);
    productCollection.addProduct(4,45, "Dummy Product 4", "Dummy Category", "Dummy Brand", 666);

    const productIterator = productCollection.createIterator();

    this.setState({productIterator: productIterator, currentProduct: productIterator.next()});
  }

  onChange(event){
    this.setState({[event.target.id]: event.target.value});
  }

  nextProduct(){
    if(this.state.productIterator.hasNext()){
      this.setState({currentProduct: this.state.productIterator.next()});
    }
  }

  favoriteProduct(){
    new DiscountObserver(this.state.currentProduct);
    this.setState({["favorited_product_id_" + this.state.currentProduct.id] : true})
  }

  makeDiscount(){
    this.state.currentProduct.price = 10;
    this.setState({currentProduct: this.state.currentProduct}); //Display update
    console.log("Make Discount");
  }

  render () {
    return(
    <div className="App">
      <header className="App-header">
        {this.state && this.state.currentProduct &&
            <React.Fragment>
              <div className="product-detail">
                <label>Title: {this.state.currentProduct.title}</label>
                <label>Price: {this.state.currentProduct.price}</label>
                <label>Category: {this.state.currentProduct.category}</label>
                <label>Brand: {this.state.currentProduct.brand}</label>
              </div>

              <div className="action-buttons">
                <input type="button" value="Next Product" onClick={this.nextProduct} disabled={!this.state.productIterator.hasNext()} />
                <input type="button" value="Favorite" onClick={this.favoriteProduct} disabled={this.state["favorited_product_id_" + this.state.currentProduct.id]}/>
                <input type="button" value="Make Discount" onClick={this.makeDiscount} />
              </div>
            </React.Fragment>
        }
      </header>
    </div>
    );
  }
}

export default App;
