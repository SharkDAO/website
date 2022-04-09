import React from 'react';
import { Sprite } from "react-pixi-fiber";


import * as PIXI from "pixi.js";

import frontIslands from '../../../public/images/frontview/Front-Islands.png'

const centerAnchor = new PIXI.Point(0.5, 0.5);

export const FrontIslands = ({...props}) => {
    return (
        <Sprite
            anchor={centerAnchor}
            texture={PIXI.Texture.from(frontIslands.src)}
            {...props}
        />
    );

}