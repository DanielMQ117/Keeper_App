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

//1. Create a new React app.
//2. Create a App.jsx component.
//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in the styles.css file to appy styling.

//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
