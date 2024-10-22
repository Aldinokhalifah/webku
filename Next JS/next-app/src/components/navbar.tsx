"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    useEffect(() => {
        const nav = document.getElementById("navbar");

        const handleScroll = () => {
            if (window.scrollY > 50) {  // misalnya, ketika scroll lebih dari 50px
                nav.classList.add("border-none");
            } else {
                nav.classList.remove("border-none");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const pathname = usePathname();

    return (
        <div className="fixed w-full flex justify-end p-4 text-slate-700 border border-slate-300 backdrop-blur-sm bg-white/30 z-50" id="navbar">
            <ul className="flex flex-row gap-2">
                <Link href="/">
                    <li className={`hover:underline hover:underline-offset-4 transition-all duration-700 py-2 ${pathname === '/' ? 'underline underline-offset-4 font-bold' : 'underline-none'}`}>
                        Home
                    </li>
                </Link>
                <Link href="/features">
                    <li className={`hover:underline hover:underline-offset-4 transition-all duration-700 py-2 ${pathname === '/features' ? 'underline underline-offset-4 font-bold' : 'underline-none'}`}>
                        New & Features
                    </li>
                </Link>
                <Link href="/profile">
                    <li className={`hover:underline hover:underline-offset-4 transition-all duration-700 py-2 ${pathname === '/profile' ? 'underline underline-offset-4 font-bold' : 'underline-none'}`}>
                        Profile
                    </li>
                </Link>
                <Link href="/sales">
                    <li className={`hover:underline hover:underline-offset-4 transition-all duration-700 py-2 ${pathname === '/sales' ? 'underline underline-offset-4 font-bold' : 'underline-none'}`}>
                        Sales
                    </li>
                </Link>
                <Link href="/login">
                    <li className="px-2 py-2 ml-96 text-sm">Sign in</li>
                </Link>
                <Link href="/register">
                    <li className="px-2 py-2 bg-black text-white rounded-lg text-sm font-bold shadow-lg">Sign up</li>
                </Link>
            </ul>
        </div>
    );
}
