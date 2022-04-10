import React, { FC, useEffect, useState } from 'react';
import { Header } from '../components/ui/Header';
import { TreasuryInfo } from '../components/ui/TreasuryInfo';

const About: FC = () => {
    return (
        <div className="App">
            <Header />
            <div className="w-full font-sans flex items-center mx-auto container py-10" >
            <TreasuryInfo />
            </div>
        </div>
    );
}

export default About;
