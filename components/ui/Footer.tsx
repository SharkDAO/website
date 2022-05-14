import { FC } from "react";
import Link from 'next/link';
import styles from './Footer.module.css';
import Image from 'next/image';
import discord from '../../public/images/discord.svg';
import twitter from '../../public/images/twitter.svg';
import snapshot from '../../public/images/icon.svg';


export const Footer: FC = () => {

    return (
            <div className={styles.footer}>
                <div className="w-3/5 flex flex-row items-center justify-center">
                    <div className="flex flex-row pt-4">

                    <div className={styles.footerLink}><Link href="https://discord.com/invite/8aThDGXHqH"><a ><Image
                            src={discord}
                            alt="discord"
                            width={50}
                            height={50}
                        /></a></Link></div>
                    
                    <div className={styles.footerLink}><Link href="https://mobile.twitter.com/sharkdao"><a >
                        <Image
                        src={twitter}
                        alt="twitter"
                        width={50}
                        height={50}
                    /></a></Link></div>

                        
                    <div className={styles.footerLink}><Link href="https://snapshot.org/#/sharkdao.eth"><a ><Image
                        src={snapshot}
                        alt="snapshot"
                        width={50}
                        height={50}
                    /></a></Link></div>  
                        
                    </div>
                <div className="flex flex-col pt-4 w-3/5">
                        little shark logo here?
                    </div>
                </div>
                <div className={`${styles.footerWatersEdge} `}>
                    {/* nothing here */}
                    &nbsp;
                </div>
            </div>
        
    );

}

export default Footer;

