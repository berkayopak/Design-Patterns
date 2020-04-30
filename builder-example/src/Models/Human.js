import React from "react";
import {Layer} from "react-konva";

class Human{
    constructor(Arm1, Arm2, Body, Head, Leg1, Leg2, Neck) {
        this.Arm1 = Arm1;
        this.Arm2 = Arm2;
        this.Body = Body;
        this.Head = Head;
        this.Leg1 = Leg1;
        this.Leg2 = Leg2;
        this.Neck = Neck;
    }

    draw() {
        return [
            this.Neck.draw(),
            this.Head.draw(),
            this.Body.draw(),
            this.Arm1.draw(),
            this.Arm2.draw(),
            this.Leg1.draw(),
            this.Leg2.draw()
        ];
    }

}

export default Human;