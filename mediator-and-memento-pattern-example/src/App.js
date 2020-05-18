import React from 'react';
import './App.css';
import ProductCollection from "./Models/ProductCollection";
import DiscountObserver from "./Models/DiscountObserver";
import Caretaker from "./Models/Caretaker";
import Product from "./Models/Product";
import Citizen from "./Models/Emergency/Citizen";
import Police from "./Models/Emergency/Police";
import Fire from "./Models/Emergency/Fire";
import Rescue from "./Models/Emergency/Rescue";
import EmergencyMediator from "./Models/Emergency/EmergencyMediator";

class App extends React.Component{
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.nextProduct = this.nextProduct.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
    this.undoProduct = this.undoProduct.bind(this);
    this.refreshDisplay = this.refreshDisplay.bind(this);

    this.state = {
      projects: ["memento", "mediator"],
      current_project: "memento",
      citizen: new Citizen(),
      police: new Police(),
      fire: new Fire(),
      rescue: new Rescue(),
      citizen_message: "",
      police_message: "",
      fire_message: "",
      rescue_message: "",
      citizen_event: "Fire",
      police_event: "Fire",
      fire_event: "Fire",
      rescue_event: "Fire",
    };

    const emergencyMediator = new EmergencyMediator();

    emergencyMediator.register(this.state.citizen);
    emergencyMediator.register(this.state.police);
    emergencyMediator.register(this.state.fire);
    emergencyMediator.register(this.state.rescue);
  }

  componentDidMount() {
    let productCollection = new ProductCollection();

    productCollection.addProduct(1,25, "Dummy Product 1", "Dummy Category", "Dummy Brand", 999);
    productCollection.addProduct(2,50, "Dummy Product 2", "Dummy Category", "Dummy Brand", 888);
    productCollection.addProduct(3,35, "Dummy Product 3", "Dummy Category", "Dummy Brand", 777);
    productCollection.addProduct(4,45, "Dummy Product 4", "Dummy Category", "Dummy Brand", 666);

    const productIterator = productCollection.createIterator();
    const productCareTaker = new Caretaker();

    let that = this;
    this.setState({productIterator: productIterator, currentProduct: productIterator.next(), productCareTaker: productCareTaker }, () => {
      that.setState({product_title: that.state.currentProduct.title});
    });
  }

  saveProduct(){
    const curProduct = this.state.currentProduct;
    this.state.productCareTaker.addObject(curProduct);
    const updatedProduct = new Product(curProduct.id, curProduct.price, this.state.product_title, curProduct.category, curProduct.brand, curProduct.num_of_purchases);
    this.setState({currentProduct : updatedProduct});
  }

  undoProduct(){
    if(this.state.productCareTaker.getSize() > 0){
      this.setState({currentProduct : this.state.productCareTaker.popLatestObject()}, () => this.refreshDisplay());

    }
  }

  refreshDisplay(){
    this.setState({
      product_title: this.state.currentProduct.title
    })
  }

  onChange(event){
    this.setState({[event.target.id]: event.target.value});
  }

  nextProduct(){
    if(this.state.productIterator.hasNext()){
      this.setState({currentProduct: this.state.productIterator.next()});
    }
  }

  render () {
    return(
    <div className="App">
      <header className="App-header">
        {this.state && this.state.currentProduct && this.state.current_project == this.state.projects[0] &&
            <React.Fragment>
              <div className="product-detail">
                <input class="input-text" type="text" id="product_title" value={this.state.product_title} onChange={this.onChange}/>
                <label>Price: {this.state.currentProduct.price}</label>
                <label>Category: {this.state.currentProduct.category}</label>
                <label>Brand: {this.state.currentProduct.brand}</label>
              </div>

              <div className="action-buttons">
                <input type="button" value="Save Product" onClick={this.saveProduct} />
                <input type="button" value="Undo Product" onClick={this.undoProduct} disabled={this.state.productCareTaker.getSize() <= 0} />
              </div>
            </React.Fragment>
        }
        {this.state && this.state.current_project == this.state.projects[1] &&
            <React.Fragment>
              <div class="community">
                <div class="citizen">
                  <label>Citizen</label>
                  <select id="citizen_event" onChange={this.onChange} value={this.state.citizen_event}>
                    <option value="Fire">Report a fire</option>
                    <option value="Criminal">Report a crime</option>
                    <option value="HealthIssue">Report a severely injured person</option>
                  </select>
                  <input id="citizen_message" class="text-area" type="text" value={this.state.citizen_message} onChange={this.onChange} />
                  <input type="button" value="Call Emergency Center" onClick={() => {this.state.citizen.callEmergencyLine(this.state.citizen_event, this.state.citizen_message)}} />
                </div>
                <div className="fire">
                  <label>Fire Department</label>
                  <select id="fire_event" onChange={this.onChange} value={this.state.fire_event}>
                    <option value="Fire">Need reinforcement</option>
                    <option value="Criminal">Can be arson</option>
                    <option value="HealthIssue">Report a severely injured person</option>
                  </select>
                  <input id="fire_message" className="text-area" type="text" value={this.state.fire_message} onChange={this.onChange}/>
                  <input type="button" value="Call Emergency Center" onClick={() => {this.state.fire.callEmergencyLine(this.state.fire_event, this.state.fire_message)}} />
                </div>
                <div className="police">
                  <label>Police Department</label>
                  <select id="police_event" onChange={this.onChange} value={this.state.police_event}>
                    <option value="Fire">Report a fire</option>
                    <option value="Criminal">Need reinforcement</option>
                    <option value="HealthIssue">Report a severely injured person</option>
                  </select>
                  <input id="police_message" className="text-area" type="text" value={this.state.police_message} onChange={this.onChange}/>
                  <input type="button" value="Call Emergency Center" onClick={() => {this.state.police.callEmergencyLine(this.state.police_event, this.state.police_message)}} />
                </div>
                <div className="rescue">
                  <label>Hospital</label>
                  <select id="rescue_event" onChange={this.onChange} value={this.state.rescue_event}>
                    <option value="Fire">Report a fire</option>
                    <option value="Criminal">Report a crime</option>
                    <option value="HealthIssue">Need reinforcement</option>
                  </select>
                  <input id="rescue_message" className="text-area" type="text" value={this.state.rescue_message} onChange={this.onChange}/>
                  <input type="button" value="Call Emergency Center" onClick={() => {this.state.rescue.callEmergencyLine(this.state.rescue_event, this.state.rescue_message)}} />
                </div>
              </div>
            </React.Fragment>
        }
        <input type="button" value="Other Project" onClick={() => {this.setState({current_project: this.state.projects.filter(x => x!=this.state.current_project)[0]})}} />
      </header>
    </div>
    );
  }
}

export default App;
