import React, { FC, useEffect, useRef, useState } from 'react';
import { Sprite, Stage } from "react-pixi-fiber";


import * as PIXI from "pixi.js";
import { SharkIsland } from './objects/SharkIsland';
import { Village } from './objects/Village';
import { FrontIslands } from './objects/FrontIslands';


/*
<div ref={ domRef } />
    
*/
export const viewportWidth = window.innerWidth * window.devicePixelRatio;
export const viewportHeight = (window.innerHeight * window.devicePixelRatio) - 150;
export const worldWidth = Math.max(window.innerWidth, 2000);
export const worldHeight = Math.max(window.innerHeight, 800);

const centerPointX = viewportWidth / 2;
const centerPointY = viewportHeight / 2;


const options = {
    backgroundColor: 0xFFFFFFa,
    resolution: window.devicePixelRatio,
    width: viewportWidth,
    height: viewportHeight
};

const style = {
    width: viewportWidth,
    height: viewportHeight
};


const MainStage:FC = () => {
    return (
        <Stage options={options} style={style} >
            <SharkIsland position={[centerPointX, centerPointY]} />
            <Village position={[centerPointX, centerPointY+80]} />
            <FrontIslands position={[centerPointX, centerPointY+50]} />
        </Stage>
    
    );
}

export default MainStage;