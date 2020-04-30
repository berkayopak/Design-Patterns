import React from "react";

class Shape {
    x=0;
    y=0;
    color='white';
    angle=0;

    constructor() {
        if (new.target === Shape) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
        if (this.getShape === undefined) {
            throw new TypeError("Must override method getShape");
        }
        if (this.setShape === undefined) {
            throw new TypeError("Must override method setShape");
        }
        if (this.draw === undefined) {
            throw new TypeError("Must override method draw");
        }
    }
}

export default Shape;