export class Result {
    id: string;

    title: string;
    description: string;
    imageLink: string;
    link: string;
    internalLink: string;

    constructor(identifier) {
        this.id = identifier;
    }
}
