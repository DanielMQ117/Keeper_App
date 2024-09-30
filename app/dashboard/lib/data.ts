"use server";

import notes from "./placeholder-data";
import { promises as fs } from "fs";
import path from "path";

const db = path.resolve(process.cwd(), "app/db.json");

export default async function fetchNotes() {
    return notes; // Simulate fetching notes from a database or API
}

// Función para leer el archivo JSON usando fs.promises
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

// Función para escribir en el archivo JSON usando fs.promises
export async function saveNotes(createNote: {}) {
    var notesToSave = JSON.stringify(createNote, null, 4); // De OBJ Javascript a formato JSON
    console.log(notesToSave);
    await fs.writeFile(db, notesToSave, "utf8");
    console.log("Nueva nota agregada correctamente.");
}

// Función para obtener el siguiente ID para una nueva nota
export async function fetchLasdId(data: {}) {
    const keys = Object.keys(data); // Obtenemos un array con todos las keys
    var intKeys = keys.map(Number); // Convertimos los keys de String a Int
    const biggestKey = Math.max(...intKeys); // Buscamos el numero mas grande

    return keys.length !== 0 ? biggestKey + 1 : 0;
}
