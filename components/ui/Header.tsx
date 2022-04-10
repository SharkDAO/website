import { FC } from "react";
import Link from 'next/link';
import Image from 'next/image'
import logoPic from '../../public/images/logo.png'


export const Header: FC = () => {


    return (
        <div className="w-full font-sans bg-white text-center flex justify-between items-center mx-auto container py-2" >
            <div className="w-full grid grid-flow-row-dense grid-cols-3">
                <div className="col-span-1 pt-4">
                    <Link href="/about"><a>about</a></Link>  |  <Link href="/proposals"><a>proposals</a></Link>
                </div>
                <div> 
                    <Link href="/">
                        <a><Image
                            src={logoPic}
                            alt="Shark Dao logo"
                            width={150}
                            height={100}
                        /></a>
                    </Link>
                </div>
                <div className="col-span-1 pt-4">
                    <button className="btn btn-blue focus:shadow-outline">connect wallet</button>

                </div>
            </div>
        </div>
    );

}
