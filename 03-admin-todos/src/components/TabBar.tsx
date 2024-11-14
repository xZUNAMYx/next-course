'use client'

import { setCookie } from 'cookies-next';
import React, { useState } from 'react'

// https://tailwindcomponents.com/component/radio-buttons-1

interface TabBarProps {
  tabOptions?: number[];
  currentTab?: number;
}

export const TabBar = ({ tabOptions = [1,2,3,4], currentTab = 1 }: TabBarProps) => {
  const [ selectedTab, setSelectedTab ] = useState(currentTab);

  const onTabSelected = (tab: number) => {
    setSelectedTab( tab );
    setCookie('selectedTab', tab.toString());
  }

  return (
    <div className={`
      flex w-full space-x-2 rounded-xl bg-gray-200 p-2
      ${"grid-cols-"+tabOptions.length}
    `}>

      {
        tabOptions.map((tab) => (
          <div key={tab} className='flex-1'>
            <input
              checked={ selectedTab === tab }
              onChange={ () => {} }
              type="radio"
              id={ tab.toString() }
              className="peer hidden"
            />

            <label 
              onClick={ () => onTabSelected( tab ) }
              className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-green-500 peer-checked:font-bold peer-checked:text-white">
              { tab }
            </label>
          </div>
        ))
      }


    </div>
  )
}