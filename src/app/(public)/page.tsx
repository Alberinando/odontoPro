import React from "react";
import {Header} from "@/app/(public)/_components/header";
import Hero from "@/app/(public)/_components/hero";
import Professionals from "@/app/(public)/_components/professionals";
import Footer from "@/app/(public)/_components/footer";

export default function Home(){
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>

            <div>
                <Hero/>

                <Professionals />

                <Footer />
            </div>
        </div>
    )
}
