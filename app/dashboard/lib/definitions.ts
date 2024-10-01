export type Note = {
    title: string;
    content: string;
};

export type AllNotes = {
    [key: string]: Note;
};
