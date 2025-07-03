import React from "react";
import Sidebar from "@/app/(panel)/dashboard/_components/sidebar";

type DashboardLayoutProps = {
    children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <Sidebar>
            {children}
        </Sidebar>
    );
}
