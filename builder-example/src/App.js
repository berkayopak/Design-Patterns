import React from 'react';
import './App.css';
import Singleton from "./Models/Singleton";
import { Stage, Layer } from 'react-konva';
import HumanPartFactory from './Models/HumanPartFactory';
import HumanBuilder from "./Builders/HumanBuilder";



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
    const humanPartFactory = new HumanPartFactory();

    let head = humanPartFactory.getShape('head');
    head.setShape(350, 100, 80, 'red');

    let neck = humanPartFactory.getShape('neck');
    neck.setShape(310, 150, 80, 70, 'brown');

    let body = humanPartFactory.getShape('body');
    body.setShape(250, 210, 200, 250, 'brown');

    let arm1 = humanPartFactory.getShape('arm');
    arm1.setShape(295, 240, 200, 50, 'brown', 120);

    let arm2 = humanPartFactory.getShape('arm');
    arm2.setShape(450, 220, 200, 50, 'brown', 60);

    let leg1 = humanPartFactory.getShape('leg');
    leg1.setShape(300, 450, 200, 50, 'brown', 90);

    let leg2 = humanPartFactory.getShape('leg');
    leg2.setShape(450, 450, 200, 50, 'brown', 90);

    let human = new HumanBuilder().setHead(head).setBody(body).setNeck(neck).setArm1(arm1).setArm2(arm2).setLeg1(leg1).setLeg2(leg2).build();


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
              {human.draw()}
            </Layer>
          </Stage>

      </header>
    </div>
    );
  }
}

export default App;
