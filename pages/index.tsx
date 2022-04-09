import React, { FC, useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import RecoilNexus from "recoil-nexus";
import { InfoModal } from '../components/ui/InfoModal';
import dynamic from 'next/dynamic'
import { Header } from '../components/ui/Header';
import { TreasuryInfo } from '../components/ui/TreasuryInfo';
// import HeroComponent from '../components/ui/HeroComponent';
const HeroComponent = dynamic(() => import('../components/ui/HeroComponent'),{ssr: false})
// import World from '../components/phaser/World';

const App: FC = () => {
     return (
        <RecoilRoot>
            <RecoilNexus />
            <div className="App">
                <Header />
                <HeroComponent />
                <InfoModal />
                <TreasuryInfo />
            </div>
        </RecoilRoot>
    );
}

export default App;
