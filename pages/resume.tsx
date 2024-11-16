import Curtain from "@/app/components/curtain";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export default function Resume() {
    return (
        <main className="flex flex-col bg-black container mx-auto font-sans scroll-smooth">
            <Curtain />
            <div className="min-h-screen">
                <Navbar/>
                <div className="mt-24">
                    <p>Resume</p>
                </div>
            </div>
            <Footer/>
        </main>
    );
}