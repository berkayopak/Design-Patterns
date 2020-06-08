import ICar from "./ICar";

class CarDecorator extends ICar{
    constructor(decoratedCar){
        super();
        this.decoratedCar=decoratedCar;
    }

    startEngine(){
        this.decoratedCar.startEngine();
    }
}

export default CarDecorator;