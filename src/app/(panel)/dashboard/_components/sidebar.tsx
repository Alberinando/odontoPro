"use client"
import React from 'react'
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {Banknote, CalendarCheck2, ChevronLeft, ChevronRight, Folder, List, Settings} from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import SidebarLinkProps from "@/app/(panel)/dashboard/_components/interface/SidebarLinkProps";
import logIMG from "@/public/logo-odonto.png";
import {Collapsible, CollapsibleContent} from "@/components/ui/collapsible";

function Sidebar({children}: {children: React.ReactNode}) {
    const pathname = usePathname();
    const [isCollapsed, setCollapsed] = React.useState(false);

    return (
        <div className="flex min-h-screen w-full">
            <aside className={clsx("flex flex-col border-r bg-background transition-all duration-300 p-4 h-full", {
                "w-20": isCollapsed,
                "w-64": !isCollapsed,
                "hidden md:flex md:fixed": true
            })}>
                <div className="mb-6 mt-4">
                    {!isCollapsed && (
                        <Image
                            src={logIMG}
                            alt="Logo do OdontoPRO"
                            priority
                            quality={100}
                        />
                    )}
                </div>

                <Button className="bg-gray-100 hover:bg-gray-50 text-zinc-900 self-end mb-2 cursor-pointer" onClick={() => setCollapsed(!isCollapsed)}>
                    {!isCollapsed ? <ChevronLeft className="w-12 h-12"/> : <ChevronRight className="w-12 h-12"/>}
                </Button>

                {isCollapsed && (
                    <nav className="flex flex-col gap-1 overflow-hidden mt-2">
                        <SidebarLink href={'/dashboard'} icon={<CalendarCheck2  className="w-6 h-6"/>} label={'Agendamentos'} pathName={pathname} isCollapsed={isCollapsed} />
                        <SidebarLink href={'/dashboard/services'} icon={<Folder  className="w-6 h-6"/>} label={'Serviços'} pathName={pathname} isCollapsed={isCollapsed} />
                        <SidebarLink href={'/dashboard/profile'} icon={<Settings  className="w-6 h-6"/>} label={'Meu perfil'} pathName={pathname} isCollapsed={isCollapsed} />
                        <SidebarLink href={'/dashboard/plans'} icon={<Banknote  className="w-6 h-6"/>} label={'Planos'} pathName={pathname} isCollapsed={isCollapsed} />
                    </nav>
                )}

                <Collapsible open={!isCollapsed}>
                    <CollapsibleContent>
                        <nav className="flex flex-col gap-1 overflow-hidden">
                            <span className="text-gray-400 font-medium mt-1 uppercase">
                                Painel
                            </span>

                            <SidebarLink href={'/dashboard'} icon={<CalendarCheck2  className="w-6 h-6"/>} label={'Agendamentos'} pathName={pathname} isCollapsed={isCollapsed} />
                            <SidebarLink href={'/dashboard/services'} icon={<Folder  className="w-6 h-6"/>} label={'Serviços'} pathName={pathname} isCollapsed={isCollapsed} />

                            <span className="text-gray-400 font-medium mt-1 uppercase">
                                Configurações
                            </span>

                            <SidebarLink href={'/dashboard/profile'} icon={<Settings  className="w-6 h-6"/>} label={'Meu perfil'} pathName={pathname} isCollapsed={isCollapsed} />
                            <SidebarLink href={'/dashboard/plans'} icon={<Banknote  className="w-6 h-6"/>} label={'Planos'} pathName={pathname} isCollapsed={isCollapsed} />
                        </nav>
                    </CollapsibleContent>
                </Collapsible>
            </aside>
            <div className={clsx("flex flex-1 flex-col transition-all duration-300", {
                "md:ml-20": isCollapsed,
                "md:ml-64": !isCollapsed
            })}>
                <header className="md:hidden flex items-center justify-between border-b px-2 md:px-6 h-14 z-10 sticky top-0 bg-white">
                    <Sheet>
                        <div className="flex items-center gap-4">
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon" className="md:hidden" onClick={() => setCollapsed(false)}>
                                    <List className="w-5 h-5" />
                                </Button>
                            </SheetTrigger>

                            <h1 className="text-base md:text-lg font-semibold">
                                Menu OdontoPro
                            </h1>
                        </div>

                        <SheetContent side="left" className="sm:max-w-xs text-black">
                            <SheetTitle className="px-3 mt-4">OdontoPRO</SheetTitle>
                            <SheetDescription className="px-3 -mt-4">
                                Menu administrativo
                            </SheetDescription>

                            <nav className="grid gap-2 text-base px-3">
                                <SidebarLink href={'/dashboard'} icon={<CalendarCheck2  className="w-6 h-6"/>} label={'Agendamentos'} pathName={pathname} isCollapsed={isCollapsed} />
                                <SidebarLink href={'/dashboard/services'} icon={<Folder  className="w-6 h-6"/>} label={'Serviços'} pathName={pathname} isCollapsed={isCollapsed} />
                                <SidebarLink href={'/dashboard/profile'} icon={<Settings  className="w-6 h-6"/>} label={'Meu perfil'} pathName={pathname} isCollapsed={isCollapsed} />
                                <SidebarLink href={'/dashboard/plans'} icon={<Banknote  className="w-6 h-6"/>} label={'Planos'} pathName={pathname} isCollapsed={isCollapsed} />
                            </nav>
                        </SheetContent>
                    </Sheet>
                </header>

                <main className="flex-1 py-4 px-6 md:p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}

function SidebarLink({href, icon, isCollapsed, pathName, label}: SidebarLinkProps){
    return (
        <Link href={href}>
            <div className={clsx("flex items-center gap-2  px-3 py-2 rounded-md  transition-colors", {
                "text-white bg-blue-500": pathName === href,
                "text-gray-700 hover:bg-gray-100 hover:text-gray-500": pathName !== href,
            })}>
                <span className="w-6 h-6">{icon}</span>
                {!isCollapsed && (<span>{label}</span>)}
            </div>
        </Link>
    )
}

export default Sidebar;
