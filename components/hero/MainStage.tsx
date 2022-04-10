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
    width: Math.min(viewportWidth, 2000),
    height: viewportHeight
};

const style = {
    width: Math.min(viewportWidth, 2000),
    height: viewportHeight,
    borderRadius: '10px',
    maxWidth: '2000',
};

// https://codesandbox.io/s/react-pixi-viewport-9ngfd?from-embed=&file=/src/Viewport.tsx

// prevent scrolling while in pixijs https://medium.com/game-development-stuff/how-to-block-the-page-scroll-while-scrolling-inside-a-pixi-js-canvas-8981306583e6

// https://github.com/ccaleb/pixi-parallax-scroller
// https://stackoverflow.com/questions/53843804/pixijs-parallax-scrolling-background-and-static-sprites

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