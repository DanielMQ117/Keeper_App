import { useState, useEffect } from "react";

export default function CreateNote() {
    const [click, setClick] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
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

    useEffect(() => {
        var id = 0;
        if (click === 0) return;

        fetch("/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(createNote),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        "Error al añadir la nota: " + response.status
                    );
                }
                return response.json(); // Convertir la respuesta a JSON
            })
            .then((data) => {
                id = data.id;
                console.log(id);

                //onLoad({ [`${id}`]: createNote });
            })
            .catch((error) => console.error("Error connecting to API:", error))
            .finally(() => {
                setIsLoading(false);
            });
    }, [click]);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        // Incrementar el contador para que la petición se
        // ejecute cada vez que se envía el formulario
        setClick(click + 1);
    }
    /* try {
            const response = await fetch("/api", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(createNote),
            });

            var id = 0;

            if (response.ok) {
                const data = await response.json();
                id = data.id;
            } else {
                console.error("Error:", response.status);
                return;
            }
            //onLoad({ [`${id}`]: createNote });
        } catch (error) {
            console.error("Error connecting to API");
        } */

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
                <button disabled={isLoading} type="submit">
                    {isLoading ? "Adding" : "Add"}
                </button>
            </form>
        </div>
    );
}

// https://nextjs.org/docs/pages/building-your-application/data-fetching/forms-and-mutations
