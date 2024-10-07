import { useEffect, useState } from "react";

export default function Greender() {
    const [time, setTime] = useState<number>(new Date().getHours());
    let greeting;

    const customStyles = {
        color: "blueviolet",
    };
    console.log(`-> Time: ${time}`);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().getHours());
        }, 600000); // Llamar cada 10 minutos
        return () => clearInterval(intervalId);
    }, []);

    if (time >= 6 && time < 12) {
        greeting = "Good Morning!";
    } else if (time >= 12 && time < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    return <h1 style={customStyles}>{greeting}</h1>;
}
