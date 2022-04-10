import { FC } from "react";
import Link from 'next/link';
import Image from "next/image";
import infoPic from '../../public/images/coin_nounglasses.png'

export const TreasuryInfo: FC = () => {


    return (
        <div className="w-full items-center">
           <article class="prose lg:prose-xl">

            <h1>About</h1>
            <p>
                    SharkDAO started as a group of Internet strangers interested in pooling together resources to acquire Nouns, a novel experiment in generative, code-driven art. Since we started on August 9, 2021, we’ve acquired 5 nouns, brought together over 400 Sharks, and raised almost 1000 ETH. We are here to evolve the Web3 ecosystem. Let's BITE.
            </p>


            <h2>Mission</h2>
            <p>
            Sharks evolve the Web3 ecosystem by building a community that collects Nouns, helping steer and grow the NounsDAO ecosystem, and partnering with artists, developers, and DAOs to create new blockchain experiences.
            </p>

            <h2>Treasury Approach</h2>
            <Image
                src={infoPic}
                alt="DAO to nouns"
                width={800}
                height={150}
            />
          
            <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mi dui, sodales non ornare non, viverra vitae ipsum. Sed nibh ipsum, ultrices eget libero quis, varius finibus lectus. Aliquam hendrerit nibh eget eleifend rhoncus. Nulla facilisi. Suspendisse potenti. Suspendisse id lectus tellus. Nunc posuere ultrices sagittis. Maecenas rhoncus nisl dolor, lacinia iaculis nisl tempor ut. Etiam feugiat, leo eu ultricies rutrum, lectus odio auctor elit, quis efficitur nisi urna et quam. Nulla eu malesuada metus. Proin mattis commodo maximus.

                    Suspendisse tempor, risus scelerisque dignissim blandit, est neque dignissim dolor, ac venenatis risus purus ut sapien. Nullam pretium lectus enim, vitae blandit elit malesuada eu. Aliquam eget ex felis. Nunc ac erat in purus pulvinar congue in mollis sem. Nulla in magna lacinia dolor pulvinar bibendum ut ac mauris. Pellentesque vehicula felis vitae diam iaculis scelerisque. Integer et erat vitae tellus faucibus semper id vel est. Praesent hendrerit nunc sit amet purus auctor fringilla. In euismod nunc a leo suscipit faucibus. Sed maximus diam pulvinar mollis commodo. Cras sodales justo eget nunc convallis, non porttitor leo egestas. Suspendisse sed tincidunt purus. 

            </p>
            </article>

        </div>
    );

}
