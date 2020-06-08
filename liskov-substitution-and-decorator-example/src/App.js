import React from 'react';
import './App.css';
import Car from "./Models/Car";
import ElectricCarDecorator from "./Models/ElectricCarDecorator";
import PetrolCarDecorator from "./Models/PetrolCarDecorator";

class App extends React.Component{
  constructor(props) {
    super(props);

    let car = new Car();
    let electricCar = new ElectricCarDecorator(car);
    let petrolCar = new PetrolCarDecorator(car);

    this.onChange = this.onChange.bind(this);
    this.state={
      car: car,
      electricCar: electricCar,
      petrolCar: petrolCar
    }
  }

  componentDidMount() {

  }

  onChange(event){
    this.setState({[event.target.id]: event.target.value});
  }

  render () {
    return(
    <div className="App">
      <header className="App-header">
        <React.Fragment>
          <input type="button" value="Base Car" onClick={() => this.state.car.startEngine()}/>
          <input type="button" value="Petrol Car" onClick={() => this.state.petrolCar.startEngine()}/>
          <input type="button" value="Electric Car" onClick={() => this.state.electricCar.startEngine()}/>
        </React.Fragment>
      </header>
    </div>
    );
  }
}

export default App;
