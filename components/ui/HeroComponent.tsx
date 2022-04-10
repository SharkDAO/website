import React, { FC, useEffect, useState } from 'react';
import MainStage from '../hero/MainStage';

const HeroComponent: FC = () => {

    // const [world, setWorld] = useState<World>();

    // useEffect(() => {
    //     console.log(World);
    //     if (typeof window !== 'undefined') {
    //         if (!world) {
    //             const world = new World();
    //             setWorld(world);
    //         }
    //     }
    // }, [world]);

    return (
        <div id='hero' className='w-full flex justify-center rounded border'>
            <MainStage /> 
        </div>
    );
}

export default HeroComponent;
