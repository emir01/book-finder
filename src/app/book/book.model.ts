import * as _ from 'lodash';

export class Book {
    title: string;
    description: string;
    imageLink: string;
    link: string;

    constructor(obj?: any) {
        if (obj) {
            this.parse(obj);
        }
    }

    private parse(object: any) {
        this.title = object.volumeInfo.title;
        this.description = object.volumeInfo.description;

        if (_.has(object, 'volumeInfo.imageLinks.smallThumbnail')) {
            this.imageLink = object.volumeInfo.imageLinks.smallThumbnail;
        }

        this.link = object.selfLink;
    }
}
