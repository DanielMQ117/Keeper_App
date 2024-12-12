"use client";

import AllNotes from "../ui/dashboard/notes";
import Footer from "../ui/dashboard/footer";
import CreateNote from "../ui/dashboard/add_notes";
import Greender from "../ui/dashboard/greender";

import { useState } from "react";
import * as Type from "./lib/definitions";
import { Suspense } from "react";
import { NotesSkeleton } from "../ui/skeletons";
import { mclaren } from "../ui/fonts";

export default function Page() {
    const [newNote, setNewNote] = useState<Type.AllNotes>({});

    function handleIncomingNote(incomingNote: Type.AllNotes = {}) {
        setNewNote(incomingNote);
    }

    return (
        <>
            <div className="create-area">
                <CreateNote onLoad={handleIncomingNote} />
            </div>
            <div className={`${mclaren.className} greender`}>
                <Greender />
            </div>
            <div className="container-notes">
                <AllNotes note={newNote} />
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    );
}
