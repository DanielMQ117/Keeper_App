import { McLaren, Montserrat } from "next/font/google";

export const mclaren = McLaren({
    subsets: ["latin"],
    display: "swap",
    weight: ["400"],
    style: "normal",
});

export const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});
