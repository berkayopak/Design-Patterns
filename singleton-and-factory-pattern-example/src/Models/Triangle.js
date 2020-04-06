import Shape from './Shape';
import {  RegularPolygon } from 'react-konva';
import React from "react";

class Triangle extends Shape{
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
            <RegularPolygon x={this.x} y={this.y} sides="3" radius={this.radius} lineJoin="bevel" fill={this.color}/>
        );
    }

}

export default Triangle;