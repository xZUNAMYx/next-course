'use client';

import Link from "next/link"
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarItemProps {
    icon: React.ReactNode;
    path: string;
    title: string;
}

export const SidebarItem = ({ icon, path, title }: SidebarItemProps) => {
    const pathName = usePathname();

    return (
        <>
            {/*src/components <SidebarItem /> */}
            {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
            <li>
                <Link href={ path } className={`
                        px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group
                        hover:bg-gradiant-to-r hover:bg-green-400 hover:text-white
                        ${ path === pathName ? 'text-white bg-gradient-to-r from-green-600 to-green-400' : ''}
                    `}>
                    { icon }
                    <span className="-mr-1 font-medium">{ title }</span>
                </Link>
            </li>
        </>
    )
}