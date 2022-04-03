import React, { FC, useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import RecoilNexus from "recoil-nexus";
import { InfoModal } from '../components/ui/InfoModal';
import dynamic from 'next/dynamic'
import { Header } from '../components/ui/Header';
import { TreasuryInfo } from '../components/ui/TreasuryInfo';
const GameComponent = dynamic(() => import ('../components/ui/GameComponent'),{ssr: false})
// import World from '../components/phaser/World';

const App: FC = () => {
     return (
        <RecoilRoot>
            <RecoilNexus />
            <div className="App">
                <Header />
                <GameComponent />
                <InfoModal />
                <TreasuryInfo />
            </div>
        </RecoilRoot>
    );
}

export default App;
