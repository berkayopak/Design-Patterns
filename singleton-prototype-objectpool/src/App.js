import React from 'react';
import './App.css';
import Singleton from "./Models/Singleton";
import {Stage, Layer} from 'react-konva';
import ShapeFactory from './Models/ShapeFactory';
import worker from 'workerize-loader!./Workers/PoolWorker'; // eslint-disable-line import/no-webpack-loader-syntax
import ObjectPool from './Models/ObjectPool';
import CircleObj from './Models/Circle';
import SingletonObjectPool from "./Models/SingletonObjectPool";
import Swal from 'sweetalert2'


class App extends React.Component {
    constructor(props) {
        super(props);

        const height = 200, width = 700;
        Singleton.setInstance(height, width);


        this.state = {
            singleton: Singleton,
            width: width,
            height: height,
            pool_objects: SingletonObjectPool.getInstance(),
            active_objects: []
        };

        this.onChange = this.onChange.bind(this);
        this.setContainer = this.setContainer.bind(this);
        this.obtainClick = this.obtainClick.bind(this);
        this.recycleClick = this.recycleClick.bind(this);

    }

    componentDidMount() {
        const that = this;
        console.log(this.state.pool_objects, "POOL OBJECTS");
        /*
        let instance = worker();
        let instance2 = worker();
        instance.expensive(1000).then( count => {
          console.log(`Ran ${count} loops`)
        });
        instance2.expensive(1000).then( count => {
          console.log(`Ran ${count} loops`)
        });
        */
        //Shallow Copy Example
        const person1 = {
            name: "John",
            surname: "Doe",
            address: {
                street: 'North 1st street',
                city: 'San Jose',
                state: 'CA',
                country: 'USA'
            }
        };
        const person2 = JSON.parse(JSON.stringify(person1));

        console.log(person1, "Original person1");
        console.log(person1, "Original person2");

        let shallow_copy_person = Object.assign({}, person1);
        let deep_copy_person = JSON.parse(JSON.stringify(person2));

        shallow_copy_person.name = "Jane";
        shallow_copy_person.address.country = "UK";

        deep_copy_person.name = "Jack";
        deep_copy_person.address.country = "FR";

        console.log(person1, "Person 1 after shallow copy change");
        console.log(shallow_copy_person, "Shallow copy of person1");

        console.log(person2, "Person 2 after deep copy change");
        console.log(deep_copy_person, "Deep copy of person2");

        console.log(this.state.pool_objects.getObjects());
    }

    obtainClick() {
        let _active_objects = this.state.active_objects;

        this.obtain().then(obj => {
            if(obj) {
                _active_objects.push(obj);
                this.setState({
                    pool_objects: SingletonObjectPool.getInstance(),
                    active_objects: _active_objects
                });
            }
        });
        this.obtain().then(obj => {
            if(obj) {
                _active_objects.push(obj);
                this.setState({
                    pool_objects: SingletonObjectPool.getInstance(),
                    active_objects: _active_objects
                });
            }
        });
        this.obtain().then(obj => {
            if(obj) {
                _active_objects.push(obj);
                this.setState({
                    pool_objects: SingletonObjectPool.getInstance(),
                    active_objects: _active_objects
                });
            }
        });
    }

    recycleClick() {
        let _active_objects = this.state.active_objects;
        if(_active_objects.length>0){
            this.recycle(_active_objects.pop()).then(res => {
                console.log("Recycled");
                this.setState({
                    pool_objects: SingletonObjectPool.getInstance(),
                    active_objects: _active_objects
                });
            });
            this.recycle(_active_objects.pop()).then(res => {
                console.log("Recycled");
                this.setState({
                    pool_objects: SingletonObjectPool.getInstance(),
                    active_objects: _active_objects
                });
            });
        }
        else {
            console.log("There is no active objects!");
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "There is no active objects!",
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    async obtain() {
        return (this.state.pool_objects.obtain());
    }

    async recycle(obj) {
        return (this.state.pool_objects.recycle(obj));
    }

    setContainer() {
        this.state.singleton.setInstance(this.state.height, this.state.width);
        this.setState({singleton: this.state.singleton});
    }

    onChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <label>Width = {this.state.singleton.getInstance().width}</label>
                    <input id="width" type="text" onChange={this.onChange}/>
                    <label>Height = {this.state.singleton.getInstance().height}</label>
                    <input id="height" type="text" onChange={this.onChange}/>
                    <input type="button" value="Set dimensions" onClick={this.setContainer}/>

                    <input type="button" value="Obtain" onClick={this.obtainClick}/>
                    <input type="button" value="Recycle" onClick={this.recycleClick}/>

                    <Stage width={this.state.singleton.getInstance().width}
                           height={this.state.singleton.getInstance().height} style={{"border": "5px solid #000000"}}>
                        <Layer>
                            {this.state.pool_objects && this.state.pool_objects.getObjects().map(function (prop, key) {
                                return prop.draw();
                            })}
                        </Layer>
                    </Stage>

                </header>
            </div>
        );
    }
}

export default App;
