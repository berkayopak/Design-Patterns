
import Shape from '../Shape';
import {  Circle as KonvaCircle } from 'react-konva';
import React from "react";

class Circle extends Shape{
    radius=0;
    constructor() {
        super();
    }
    getShape(){
        return this;
    }
    setShape(x, y, radius, color='white'){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    draw(){
        return(
            <KonvaCircle x={this.x} y={this.y} radius={this.radius} fill={this.color}/>
        );
    }

}

export default Circle;