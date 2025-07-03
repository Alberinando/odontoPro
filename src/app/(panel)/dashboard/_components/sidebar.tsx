"use client"
import React from 'react'
import { usePathname } from "next/navigation";

function Sidebar({children}: {children: React.ReactNode}) {
    const pathname = usePathname();
    const [isCollapsed, setCollapsed] = React.useState(false);

    return (
        <div className="flex min-h-screen w-full">
            
        </div>
    )
}

export default Sidebar;
