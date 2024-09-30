import { fetchSavedNotes } from "@/app/dashboard/lib/data";
import { useState } from "react";

function Notes(props: any) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}

export default async function AllNotes({
    note,
}: {
    note: {
        [key: string]: {
            title: string;
            content: string;
        };
    };
}) {
    // const allNotes = await fetchNotes();
    // const oldNotes = await fetchSavedNotes();

    //const [notes, setNotes] = useState();

    return (
        <>
            {Object.keys(note).forEach((id) => {
                return (
                    <Notes
                        key={id}
                        title={note[id]["title"]}
                        content={note[id]["content"]}
                    />
                );
            })}
        </>
    );
}
