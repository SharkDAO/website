import { FC } from "react";



export const Header: FC = () => {


    return (
        <div className="navbar navbar-expand-md w-full font-sans bg-white text-center flex justify-between items-center mx-auto container shadow-lg py-2 bg-white" >

            <ul className="list-none p-0 flex items-center w-full flex">
                <li className="nav-item">
                    <a
                        className="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline"
                        href="#!"
                    >about</a
                    >
                </li>
                <li className="px-6"><a href="/">
                    <img src="/images/logo.png" className="h-10 sm:h-10 rounded-full" alt="logo" />
                </a></li>
                <li className="nav-item">
                    <a
                        className="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline"
                        href="#!"
                    >about</a
                    >
                </li>

            </ul>

        </div>
    );

}
