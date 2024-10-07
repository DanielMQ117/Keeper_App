import { useEffect, useState } from "react";
import * as Type from "@/app/dashboard/lib/definitions";

function Note(props: Type._Note) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={() => props.onRemove(props.id)}>🗑️</button>
        </div>
    );
}

export default function AllNotes({ note }: { note: Type.AllNotes }) {
    const [allNotes, setAllNotes] = useState<Type.AllNotes>({});

    console.log("-> Debug 1");
    // console.log("Fetching revenue data...");
    // new Promise((resolve) => setTimeout(resolve, 5000));
    // console.log("Data fetch completed after 5 seconds.");

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

    function filterNotes(notes: Type.AllNotes, id: string): Type.AllNotes {
        const toArrayValues = Object.entries(notes);
        const updateValues = toArrayValues.filter((item) => item[0] !== id);
        const toObjValues = Object.fromEntries(updateValues);
        return toObjValues;
    }

    function handleRemoveClick(id: string) {
        setAllNotes((prevState) => filterNotes(prevState, id));

        fetch("/api", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }), // = {"id":"2"}
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        "Error al eliminar la nota: " + response.status
                    );
                }
                return response.json();
            })
            .then((data) => console.log(data))
            .catch((error) => console.error("Error connecting to API:", error));
    }

    return (
        <>
            {Object.keys(allNotes).map((ID) => {
                return (
                    <Note
                        key={ID}
                        id={ID}
                        title={allNotes[ID].title}
                        content={allNotes[ID].content}
                        onRemove={handleRemoveClick}
                    />
                );
            })}
        </>
    );
}
