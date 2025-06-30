import React from "react";
import {Header} from "@/app/(public)/_components/header";
import Hero from "@/app/(public)/_components/hero";

export default function Home(){
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>

            <div>
                <Hero/>
            </div>
        </div>
    )
}
