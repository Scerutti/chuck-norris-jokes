export enum Status {
    Init = 'init',
    Pending = 'pedning',
    Resolved = 'resolved',
    Rejected = 'rejected'
}

export interface Joke{
    id: string,
    value: string
}