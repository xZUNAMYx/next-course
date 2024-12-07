import Image from "next/image";
import { SidebarItem } from "../sidebar/SidebarItem";
import {
    IoCalendarOutline,
    IoCheckboxOutline,
    IoCodeWorking,
    IoListOutline,
    IoPerson,
} from "react-icons/io5";
import { auth } from "@/app/api/auth/auth";
import { LogoutButton } from "./LogoutButton";

const menuItem = [
    {
        icon: <IoCalendarOutline />,
        title: "Dashboard",
        path: "/dashboard",
    },
    {
        icon: <IoCheckboxOutline />,
        title: "Rest Todos",
        path: "/dashboard/rest-todos",
    },
    {
        icon: <IoListOutline />,
        title: "Server Actions",
        path: "/dashboard/server-actions",
    },
    {
        icon: <IoCodeWorking />,
        title: "Cookies",
        path: "/dashboard/cookies",
    },
    {
        icon: <IoCodeWorking />,
        title: "Productos",
        path: "/dashboard/products",
    },
    {
        icon: <IoPerson />,
        title: "Perfil",
        path: "/dashboard/profile",
    },
];

export const Sidebar = async () => {
    const session = await auth();
    const sessionName = session?.user?.name;
    const sessionImage = session?.user?.image;
    const sessionRoles = session?.user?.roles;

    return (
        <>
            {/* src/components <Sidebar /> */}
            <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-full border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
                <div className="">
                    <div className="mt-8 text-center">
                        {/* Next/Image */}
                        <Image
                            src={sessionImage ? sessionImage : "/images/default-user.png"}
                            alt=""
                            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
                            width={128}
                            height={128}
                        />
                        <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
                            {sessionName ? sessionName : "Nombre de usuario"}
                        </h5>
                        <span className="hidden text-gray-400 lg:block">
                            { sessionRoles ? sessionRoles.join(", ") : "Roles" }
                        </span>
                    </div>

                    <ul className="space-y-2 tracking-wide mt-8">
                        {menuItem.map((item) => (
                            <SidebarItem key={item.path} {...item} />
                        ))}
                        ,
                    </ul>

                    <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                    <LogoutButton />
                </div>
                </div>

                <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                    <LogoutButton />
                </div>
            </aside>
            {/*Fin del <Sidebar /> */}
        </>
    );
};
