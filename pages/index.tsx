import React, { FC, useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import dynamic from 'next/dynamic'
import { Header } from '../components/ui/Header';
import MintingArea from '../components/ui/MintArea';
import Footer from '../components/ui/Footer';
const HeroComponent = dynamic(() => import('../components/ui/HeroComponent'),{ssr: false})

const App: FC = () => {
     return (
        <RecoilRoot>
            <div className="App">
                <Header />
                <HeroComponent />
                <div className="w-full font-sans text-center flex justify-between items-center mx-auto container py-10" >
                    <MintingArea />
                </div>
                 <Footer />
            </div>
        </RecoilRoot>
    );
}

export default App;
