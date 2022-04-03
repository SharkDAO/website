import { FC } from "react";
import Link from 'next/link';
import Image from "next/image";
import infoPic from '../../public/images/coin_nounglasses.png'

export const TreasuryInfo: FC = () => {


    return (
        <div className="flex items-center mx-auto" >
            <Image
                src={infoPic}
                alt="DAO to nouns"
                width={800}
                height={150}
            />

            <p>
                Treasury decides on a noun to bid on and turns Shark money into Noun holdings..... 

            </p>

        </div>
    );

}
