import React from 'react';
import { Sprite } from "react-pixi-fiber";


import * as PIXI from "pixi.js";

import mountainBackground from '../../../public/images/frontview/Main-transparent.png'

const centerAnchor = new PIXI.Point(0.5, 0.5);

export const SharkIsland = ({...props}) => {
    return (
        <Sprite
            anchor={centerAnchor}
            texture={PIXI.Texture.from(mountainBackground.src)}
            width={2100}
            {...props}
        />
    );

}