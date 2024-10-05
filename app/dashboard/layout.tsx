import Header from "@/app/ui/dashboard/header";
import { mclaren, montserrat } from "../ui/fonts";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="app">
            <div className={`${mclaren.className}`}>
                <Header />
            </div>
            <div className={`${montserrat.className} main-container`}>
                {children}
            </div>
        </div>
    );
}
