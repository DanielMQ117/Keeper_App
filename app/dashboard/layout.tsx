import Header from "@/app/ui/dashboard/header";
import { mclaren, montserrat } from "../ui/fonts";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className={`${mclaren.className}`}>
                <Header />
            </div>
            <div className={`${montserrat.className}`}>
                <div>{children}</div>
            </div>
        </div>
    );
}
