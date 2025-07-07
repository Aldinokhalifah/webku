import Description from "@/components/Description";
import Dictionary from "@/components/Dictionary";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Index() {

    return (
        <>
            <div className="min-h-screen">
                <Hero />
                <Description />
                <Dictionary />
                <Footer />
            </div>
        </>
    );
}