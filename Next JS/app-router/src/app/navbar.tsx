import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const { status}: { status: any} = useSession();


    return (
        <nav className="flex bg-gray-800 py-2 px-5 justify-between">
            <h1 className="text-white">Navbar</h1>
            <ul className="flex ml-5">
                <Link href="/">
                <li className={`mr-3 ${pathname === "/" ? "text-blue-300" : "text-white"} cursor-pointer`}>Home</li>
                </Link>               
                <Link href="/about">
                <li className={`mr-3 ${pathname === "/about" ? "text-blue-300" : "text-white"} cursor-pointer`}>About</li>
                </Link>               
                <Link href="/about/profile">
                <li className={`mr-3 ${pathname === "/about/profile" ? "text-blue-300" : "text-white"} cursor-pointer`}>Profile</li>
                </Link> 
            </ul>
            <div>
            {status === 'authenticated' ? (
                <button 
                className="bg-white rounded-md px-3 text-sm h-7"
                onClick={() => signOut()}
                >Logout
                </button> 
            ) : (
                <button 
                className="bg-white rounded-md px-3 text-sm h-7"
                onClick={() => signIn()}
                >Login
                </button>
            )}
            </div>         
        </nav>
    );
}