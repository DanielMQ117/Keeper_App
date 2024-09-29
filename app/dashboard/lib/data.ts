"use server";

import { Notes } from "./definitions";
import notes from "./placeholder-data";
import { promises as fs } from "fs";

const db = process.cwd() + "/app/db.json";

export default async function fetchNotes() {
    return notes; // Simulate fetching notes from a database or API
}

export async function fetchSavedNotes(): Promise<{}> {
    console.log(db);
    // Si el archivo existe, leer los datos actuales
    try {
        const jsonData = await fs.readFile(db, "utf8");
        const JSData = JSON.parse(jsonData); // Convertir el contenido del archivo JSON a un objeto
        return JSData;
    } catch (err: any) {
        console.error(err.message);
        var obj = new Object();
        return obj; // Si el archivo no existe, devolver un objeto vacío
    }
}

export async function saveNotes(createNote: {}) {
    var notesToSave = JSON.stringify(createNote, null, 4); // De OBJ Javascript a formato JSON
    console.log(notesToSave);
    fs.writeFile(db, notesToSave, "utf8");
    console.log("Nueva nota agregada correctamente.");
}
