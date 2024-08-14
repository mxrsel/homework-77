export interface Message {
    id: string;
    author: string,
    message: string,
}

export type MessageMutation = {
    author: string
    message: string
    image: string | null;
};