export type Note = {
    title: string;
    content: string;
};

export type _Note = {
    id: string;
    title: string;
    content: string;
    onRemove: Function;
};

export type AllNotes = {
    [key: string]: Note;
};
