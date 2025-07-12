import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({children}) {

    return(
        <>
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-800">
                <Navbar />
                    <main >{children}</main>
                <Footer />
            </div>
        </>
    );
}