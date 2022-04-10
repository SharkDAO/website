import React, { FC, useEffect, useState } from 'react';


const MintingArea = () => {
    return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div className="h-148 lg:h-auto lg:w-80 flex-none bg-shark-blue rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                Shark image here
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
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