import React, { FC, useEffect, useState } from 'react';
import MainStage from '../hero/MainStage';
import styles from './HeroComponent.module.css';

const HeroComponent: FC = () => {

    return (
        <div id='hero' className={styles.hero}>
            <MainStage /> 
            <div className={`${styles.watersEdge} `}>               
                {/* nothing here */}
                &nbsp;
            </div>
        </div>
    );
}

export default HeroComponent;