import Image from "next/image";
import { IoCalculator, IoContractOutline, IoLogoReact } from "react-icons/io5";
import { SidebarMenuItem } from "../sidebar/SidebarMenuItem";
import { GrFavorite } from "react-icons/gr";

const menuItems = [
    {
        path: "/dashboard/main",
        icon: <IoCalculator size={40} />,
        title: "Dashboard",
        description: "Data Overview"
    },
    {
        path: "/dashboard/counter",
        icon: <IoContractOutline size={40} />,
        title: "Counter",
        description: "Contador"
    },
    {
        path: "/dashboard/pokemons",
        icon: <IoContractOutline size={40} />,
        title: "Pokemons",
        description: "Generación estática"
    },
    {
        path: "/dashboard/favorites",
        icon: <GrFavorite size={40} />,
        title: "Favoritos",
        description: "Global State"
    },
]

export const Sidebar = () => {
    return (
        <div id="menu" 
            style={{ width: "400px"}}
            className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll">
            <div id="logo" className="my-4 px-6">
                <h1 className="flex text-lg md:text-2xl font-bold text-white">
                    <IoLogoReact className="mr-2 text-blue-500" size={30} />
                    <span>Dash</span>
                    <span className="text-blue-500">8</span>.
                </h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image
                            width={50}
                            height={50}
                            className="rounded-full w-8 h-8" 
                            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
                            alt="User Avatar" 
                        />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Andres Alvarez
                    </span>
                </a>
            </div>
            
            <div id="nav" className="w-full px-6">
                
                {
                    menuItems.map( item => (
                        <SidebarMenuItem 
                            key={item.path}
                            {...item}
                        />
                    ))
                }
                
            </div>
        </div>
    );
}