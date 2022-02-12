import { trace } from "console";

import dynamic from 'next/dynamic'

const Phaser = dynamic(
    () => import('phaser'),
    { ssr: false }
)



class Config  {


    debug() {
        return true;
    }

}