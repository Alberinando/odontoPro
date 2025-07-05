import React from "react";

export default interface SidebarLinkProps {
    href: string;
    icon: React.ReactNode;
    label: string;
    pathName: string;
    isCollapsed: boolean;
}