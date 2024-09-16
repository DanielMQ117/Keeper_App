import fetchNotes from "@/app/dashboard/lib/data";

function Notes(props: any) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}

export default async function AllNotes() {
    const allNotes = await fetchNotes();
    return (
        <>
            {allNotes.map((note) => {
                return (
                    <Notes
                        key={note.key}
                        title={note.title}
                        content={note.content}
                    />
                );
            })}
        </>
    );
}
