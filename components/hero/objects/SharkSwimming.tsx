import React from 'react';
import { CustomPIXIComponent, Sprite } from "react-pixi-fiber";

import * as PIXI from "pixi.js";


// import sharkSwimmingTextures from '';

// const sharkTextures = new PIXI.Texture.from(sharkSwimmingTextures);
// const centerAnchor = new PIXI.Point(0.5, 0.5);


export const SharkSwimming = ({ ...props }) => {
    return (<div></div>);
}

// type AnimatedSpriteProps = {
// };
// const AnimatedSprite = CustomPIXIComponent<PIXI.AnimatedSprite, AnimatedSpriteProps>(
//     {
//         customDisplayObject: props => new PIXI.AnimatedSprite(sharkSwimmingTextures),
//         customApplyProps: (instance, oldProps, newProps) => {
//             console.log(instance.animationSpeed);
//             console.log(instance.textures);
//             console.log(newProps);
//         },
//         customDidAttach: instance => {
//             console.log(instance.textures);
//         },
//         customWillDetach: instance => {
//             console.log(instance.textures);
//         },
//     },
//     "AnimatedSprite"
// );

// const SharkSwimming: React.FC = () => <AnimatedSprite textures={[]} />;