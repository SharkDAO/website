import React, { FC, useEffect, useState } from 'react';
import MainStage from '../hero/MainStage';

const HeroComponent: FC = () => {

    return (
        <div id='hero' className='w-full flex justify-center rounded'>
            <MainStage /> 
        </div>
    );
}

export default HeroComponent;
