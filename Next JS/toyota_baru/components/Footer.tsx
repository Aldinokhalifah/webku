export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white py-6 md:py-8">
            <div className="container mx-auto px-4 text-center">
            <p className="text-sm font-bold md:text-base">&copy; {new Date().getFullYear()} Rangga Toyota - Sales Mobil Profesional. All rights reserved.</p>
            </div>
        </footer>
    )
}