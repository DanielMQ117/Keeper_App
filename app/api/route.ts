import { NextResponse } from "next/server";
import { fetchLasdId, fetchSavedNotes, saveNotes } from "../dashboard/lib/data";

// GET: Para leer las notas
export async function GET() {
    const notes = await fetchSavedNotes();
    return NextResponse.json(notes);
}

// POST: Para agregar una nueva nota
export async function POST(request: Request) {
    console.log("ENTRA");

    const newNote = await request.json();
    const oldNotes = await fetchSavedNotes();
    const ID = await fetchLasdId(oldNotes);
    // Agregar la nueva nota
    Object.assign(oldNotes, { [`${ID}`]: newNote });
    await saveNotes(oldNotes);

    return NextResponse.json({ message: "Nota añadida con éxito", id: ID });
}
