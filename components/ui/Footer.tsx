import { FC } from "react";
import Link from 'next/link';
import Image from 'next/image'
import logoPic from '../../public/images/logo.png'


export const Footer: FC = () => {

    return (
            <div className="w-full font-sans bg-shark-light-blue text-center flex justify-between items-center mx-auto container py-2" >
                <div className="w-full grid grid-flow-row-dense grid-cols-3">
                    <div className="col-span-2 pt-4">
                    <p><Link href="https://discord.com/invite/8aThDGXHqH"><a>discord</a></Link></p>
                    
                    <p><Link href="https://mobile.twitter.com/sharkdao"><a>twitter</a></Link></p>

                        
                        <p><Link href="https://snapshot.org/#/sharkdao.eth"><a>snapshot</a></Link></p>  
                        
                    </div>
                    <div className="col-span-1 pt-4">
                        little shark logo here?
                    </div>
                </div>
            </div>
        
    );

}

export default Footer;

