import { FC } from "react";
import Link from 'next/link';
import Image from "next/image";
import infoPic from '../../public/images/coin_nounglasses.png'

export const TreasuryInfo: FC = () => {


    return (
        <div className="container mx-auto items-center"  >
            <div className="py-2 m-3 text-center items-center w-full">
            <Image
                src={infoPic}
                alt="DAO to nouns"
                width={800}
                height={150}
            />
            </div>

            <div className="block py-2 m-2">

            <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mi dui, sodales non ornare non, viverra vitae ipsum. Sed nibh ipsum, ultrices eget libero quis, varius finibus lectus. Aliquam hendrerit nibh eget eleifend rhoncus. Nulla facilisi. Suspendisse potenti. Suspendisse id lectus tellus. Nunc posuere ultrices sagittis. Maecenas rhoncus nisl dolor, lacinia iaculis nisl tempor ut. Etiam feugiat, leo eu ultricies rutrum, lectus odio auctor elit, quis efficitur nisi urna et quam. Nulla eu malesuada metus. Proin mattis commodo maximus.

                    Suspendisse tempor, risus scelerisque dignissim blandit, est neque dignissim dolor, ac venenatis risus purus ut sapien. Nullam pretium lectus enim, vitae blandit elit malesuada eu. Aliquam eget ex felis. Nunc ac erat in purus pulvinar congue in mollis sem. Nulla in magna lacinia dolor pulvinar bibendum ut ac mauris. Pellentesque vehicula felis vitae diam iaculis scelerisque. Integer et erat vitae tellus faucibus semper id vel est. Praesent hendrerit nunc sit amet purus auctor fringilla. In euismod nunc a leo suscipit faucibus. Sed maximus diam pulvinar mollis commodo. Cras sodales justo eget nunc convallis, non porttitor leo egestas. Suspendisse sed tincidunt purus. 

            </p>
            </div>

        </div>
    );

}
