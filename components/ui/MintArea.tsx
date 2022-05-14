import React, { FC, useEffect, useState } from 'react';


const MintingArea = () => {
    return (
        <div className="flex flex-row rounded-md bg-white p-6 drop-shadow-md mt-10">
            <div className="h-148 lg:h-auto lg:w-80 flex-none text-center overflow-hidden">
                Shark image here
            </div>
            <div className="border-l border-gray-400 p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                     Minting
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">Something about whats available</div>
                    <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
            </div>
                <div className="flex items-center">
                        <div className="text-sm">
                            <p className="text-gray-900 leading-none">TODO</p>
                            <p className="text-gray-600">Aug 18</p>
                    </div>
            </div>
        </div>
    </div>);
};

export default MintingArea;