import { FC } from "react";
import Link from 'next/link';
import Image from 'next/image'
import logoPic from '../../public/images/logo.png'
import styles from './Header.module.css';

export const Header: FC = () => {


    return (
        <div className={`${styles.header}`} >
            <div className="w-full flex flex-row justify-center items-center">
                {/*
                <div className="col-span-1 pt-4">
                    <Link href="/about"><a>about</a></Link>  |  <Link href="/proposals"><a>proposals</a></Link>
                </div>
                */}
                <div className={styles.headerTab}> 
                    <Link href="/">
                        <a><Image
                            src={logoPic}
                            alt="Shark Dao logo"
                            width={150}
                            height={100}
                        /></a>
                    </Link>
                </div>
                {/* <div className="col-span-1 pt-4">
                    <button className="btn btn-blue focus:shadow-outline">connect wallet</button>

                </div>
                */}
            </div>
        </div>
    );

}
