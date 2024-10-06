'use client'

import React from 'react';
import { SimpleWidget } from './SimpleWidget';
import { IoCafeOutline } from 'react-icons/io5';
import { useAppSelector } from '@/store';

export const WidgetsGrid = () => {

    const count = useAppSelector( state => state.counter.count );

    return (
        <div className="flex flex-wrap p-2">
            <SimpleWidget 
                title={ `${count}` }
                subtitle='Productos agregados'
                label= 'Contador'
                icon= {<IoCafeOutline size={50} className="text-blue-500"/>}
                href='/dashboard/counter'
            />
            {/* <SimpleWidget /> */}
        </div>
    )
}
