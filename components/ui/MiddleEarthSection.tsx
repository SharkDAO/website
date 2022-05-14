import React, { FC, useEffect, useState } from 'react';
import styles from './MiddleEarthSection.module.css';
import MintingArea from './MintArea';

/**
 * 
 * Underwater section to animate on scroll 
 *  
 */
const MiddleEarthSection: FC = () => {

    return (
        <div id='middle' className={styles.mainSection}>
            <MintingArea />

            <div className="flex flex-row rounded-md bg-white p-6 drop-shadow-md mt-10">
                info blurb to animate
            </div>
        </div>
    );
}

export default MiddleEarthSection;