import React, { FC, useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import RecoilNexus from "recoil-nexus";
import World from '../phaser/World';

const GameComponent: FC = () => {

    const [world, setWorld] = useState<World>();
    // componentDidMount
    // const DynamicComponentWithNoSSR = dynamic( () => import('../components/hello3'), { ssr: false } )

    useEffect(() => {
        console.log(World);
        if (typeof window !== 'undefined') {
            if (!world) {
                const world = new World();
                setWorld(world);
            }
        }
    }, [world]);

    return (
        <div id='hero' className='bg-gradient-to-t from-shark-dark-blue via-shark-blue to-shark-dark-blue' />
    );
}

export default GameComponent;
