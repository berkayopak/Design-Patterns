import React from 'react';
import './App.css';
import Singleton from "./Models/Singleton";
import { Stage, Layer } from 'react-konva';
import ShapeFactory from './Models/ShapeFactory';



class App extends React.Component{
  constructor(props) {
    super(props);

    const height = 700, width = 800;
    Singleton.setInstance(height,width);

    this.state = {singleton: Singleton, width: width, height: height};

    this.onChange = this.onChange.bind(this);
    this.setContainer = this.setContainer.bind(this);
  }

  componentDidMount() {

  }

  setContainer(){
    this.state.singleton.setInstance(this.state.height, this.state.width);
    this.setState({singleton: this.state.singleton});
  }

  onChange(event){
    this.setState({[event.target.id]: event.target.value});
  }

  render () {
    const shapeFactory = new ShapeFactory();

    let circle = shapeFactory.getShape('circle');
    circle.setShape(250, 200, 100, 'green');

    let rectangle = shapeFactory.getShape('rectangle');
    rectangle.setShape(450, 100, 200, 200, 'brown');

    let triangle = shapeFactory.getShape('triangle');
    triangle.setShape(250, 525, 120, 'DarkOrange');

    let star = shapeFactory.getShape('star');
    star.setShape(550, 505, 45 , 105, 5, 'yellow');

    return(
    <div className="App">
      <header className="App-header">
        <label>Width = {this.state.singleton.getInstance().width}</label>
        <input id="width" type="text" onChange={this.onChange}/>
        <label>Height = {this.state.singleton.getInstance().height}</label>
        <input id="height" type="text" onChange={this.onChange}/>
        <input type="button" value="Set dimensions" onClick={this.setContainer}/>

          <Stage width={this.state.singleton.getInstance().width} height={this.state.singleton.getInstance().height} style={{"border":"5px solid #000000"}}>
            <Layer>
              {circle.draw()}
              {rectangle.draw()}
              {triangle.draw()}
              {star.draw()}
            </Layer>
          </Stage>

      </header>
    </div>
    );
  }
}

export default App;
