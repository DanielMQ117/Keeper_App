import { NextResponse } from "next/server";
import {
    deleteNote,
    fetchLasdId,
    fetchSavedNotes,
    saveNotes,
} from "../dashboard/lib/data";

// GET: Para leer las notas
export async function GET() {
    const notes = await fetchSavedNotes();
    return NextResponse.json(notes);
}

// POST: Para agregar una nueva nota
export async function POST(request: Request) {
    const newNote = await request.json();
    const oldNotes = await fetchSavedNotes();
    const ID = await fetchLasdId(oldNotes);
    // Agregar la nueva nota
    Object.assign(oldNotes, { [`${ID}`]: newNote });
    const response = await saveNotes(oldNotes);

    return NextResponse.json({
        message: response
            ? "Nota añadida con éxito"
            : "Error al añadida la éxito",
        id: ID,
    });
}

// DELETE: Para eliminar una nota
export async function DELETE(request: Request) {
    const remobeNote = await request.json();
    const response = await deleteNote(remobeNote.id);

    return NextResponse.json({
        message: response
            ? "Nota eliminada con éxito."
            : "Error al eliminar la nota.",
        id: remobeNote.id,
    });
}
