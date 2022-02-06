import React, { FC, useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import RecoilNexus from "recoil-nexus";
import { InfoModal } from './components/ui/InfoModal';
// import dynamic from 'next/dynamic'
// const World = dynamic(() => import('./components/phaser/World'))
import World from './components/phaser/World';

const App: FC = () => {

    const [world, setWorld] = useState<World>();

    useEffect(() => {
        if (!world) {
            const world = new World();
            setWorld(world);
        }
    }, [world]);

    return (
        <RecoilRoot>
            <RecoilNexus />
            <div className="App">
                <div id='hero' />
                <InfoModal />
            </div>
        </RecoilRoot>
    );
}

export default App;
