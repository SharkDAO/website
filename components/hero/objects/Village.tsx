import React from 'react';
import { Container, Sprite, AppContext } from "react-pixi-fiber";


import * as PIXI from "pixi.js";

import villages from '../../../public/images/frontview/building.png'

const centerAnchor = new PIXI.Point(0.5, 0.5);

export const Village = ({...props}) => {

    // const [rotation, setRotation] = React.useState(0);
    // const app = React.useContext(AppContext);

    // const animate = React.useCallback(delta => {
    //     // just for fun, let's rotate mr rabbit a little
    //     // delta is 1 if running at 100% performance
    //     // creates frame-independent tranformation
    //     setRotation(rotation => rotation + 0.1 * delta);
    // }, []);

    // React.useEffect(() => {
    //     app.ticker.add(animate);

    //     return () => {
    //         app.ticker.remove(animate);
    //     };
    // }, [app.ticker, animate]);


    return (
        <Container>
        <Sprite
            anchor={centerAnchor}
            texture={PIXI.Texture.from(villages.src)}
            width={700}
            height={300}
            {...props}
        />
        </Container>
    );

}