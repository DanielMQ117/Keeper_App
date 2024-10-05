import { useEffect, useState } from "react";
import * as Type from "@/app/dashboard/lib/definitions";

function Note(props: Type.Note) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}

export default function AllNotes({ note }: { note: Type.AllNotes }) {
    const [allNotes, setAllNotes] = useState<Type.AllNotes>({});

    console.log("-> Debug 1");
    console.log("Fetching revenue data...");
    new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Data fetch completed after 5 seconds.");
    
    useEffect(() => {

        fetch("/api", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        "Error al obtener las notas: " + response.status
                    );
                }
                return response.json(); // Convertir la respuesta a JSON
            })
            .then((oldNotes) => {
                setAllNotes(oldNotes); // Convertir de JSON a Obj de JS
                console.log(oldNotes);
                console.log("-> Debug 2");
                console.log(allNotes);
                console.log("-> Debug 3");
            })
            .catch((error) =>
                console.error("Error connecting to API: ", error)
            );
    }, []);

    useEffect(() => {
        if (Object.keys(note).length !== 0) {
            setAllNotes((prevState) => {
                return { ...prevState, ...note };
            });
        }
    }, [note]);

    return (
        <>
            {Object.keys(allNotes).map((key) => (
                <Note
                    key={key}
                    title={allNotes[key].title}
                    content={allNotes[key].content}
                />
            ))}
        </>
    );
}
