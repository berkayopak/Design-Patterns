
import Shape from './Shape';
import {  Star as KonvaStar } from 'react-konva';
import React from "react";

class Star extends Shape{
    innerRadius=0;
    outerRadius=0;
    numPoints=0;

    constructor() {
        super();
    }
    getShape(){
        return this;
    }
    setShape(x, y, innerRadius, outerRadius, numPoints=5, color='white'){
        this.x = x;
        this.y = y;
        this.innerRadius = innerRadius;
        this.outerRadius = outerRadius;
        this.numPoints = numPoints;
        this.color = color;
    }
    draw(){
        return(
            <KonvaStar x={this.x} y={this.y} innerRadius={this.innerRadius} outerRadius={this.outerRadius} numPoints={this.numPoints} fill={this.color}/>
        );
    }

}

export default Star;