import React, { FC, useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import dynamic from 'next/dynamic'
import { Header } from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import MiddleEarthSection from '../components/ui/MiddleEarthSection';
const HeroComponent = dynamic(() => import('../components/ui/HeroComponent'),{ssr: false})

const App: FC = () => {
     return (
        <RecoilRoot>
            <div className="App">
                <Header />
                <HeroComponent />
                <MiddleEarthSection />
                <Footer />
            </div>
        </RecoilRoot>
    );
}

export default App;
