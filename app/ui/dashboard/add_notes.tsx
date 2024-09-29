"use client";

import { useState, useEffect } from "react";
import { fetchSavedNotes, saveNotes } from "@/app/dashboard/lib/data";
import { Notes } from "../../dashboard/lib/definitions";

export default function CreateNote() {
    const [id, setId] = useState(0);
    const [oldNotes, setOldNotes] = useState([{}]);
    const [createNote, setCreateNote] = useState({
        title: "",
        content: "",
    });

    function handleInputTitle(
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value } = event.target;
        setCreateNote((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
        console.log(createNote);
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        var lastID = 0;
        var data = await fetchSavedNotes();
        const keys = Object.keys(data); // Obtenemos un array con todos las keys
        var intKeys = keys.map(Number); // Convertimos los keys de String a Int
        const biggestKey = Math.max(...intKeys); // Buscamos el numero mas grande

        if (keys.length !== 0) {
            lastID = biggestKey + 1;
        }
        // Agregar la nueva nota
        Object.assign(data, { [`${lastID}`]: createNote });
        // Guardamos todas las notas
        await saveNotes(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="title"
                    value={createNote.title}
                    placeholder="Title"
                    onChange={handleInputTitle}
                />
                <textarea
                    name="content"
                    rows={3}
                    value={createNote.content}
                    onChange={handleInputTitle}
                    placeholder="Take a note..."
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}
