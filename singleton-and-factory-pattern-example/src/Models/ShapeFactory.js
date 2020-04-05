import Circle from "./Circle";
import Rectangle from "./Rectangle";
import Triangle from "./Triangle";
import Star from "./Star";


class ShapeFactory {

    constructor() {

    }

    getShape(shape_type){
        if(shape_type=="circle"){
            return new Circle();
        }
        else if(shape_type=="rectangle"){
            return new Rectangle();
        }
        else if(shape_type=="triangle"){
            return new Triangle();
        }
        else if(shape_type="star"){
            return new Star();
        }
    }

}

export default ShapeFactory;