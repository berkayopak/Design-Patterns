import Shape from '../Shape';
import {  Rect as KonvaRect } from 'react-konva';
import React from "react";

class Arm extends Shape{
    width=0;
    height=0;

    constructor() {
        super();
    }
    getShape(){
        return this;
    }
    setShape(x, y, width, height, color='white', angle=0){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.angle = angle;
    }
    draw(){
        return(
            <KonvaRect x={this.x} y={this.y} width={this.width} height={this.height} fill={this.color} rotation={this.angle}/>
        );
    }

}

export default Arm;