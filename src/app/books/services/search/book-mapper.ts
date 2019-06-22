import { ObjectMapper } from './../../../core/mappers/ObjectMapper';
import { BookModel } from './../../models/book-model';
import { EntityResultMapper } from 'src/app/core/interfaces/EntityResultMapper';
import { Result } from 'src/app/core/result/result.model';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class BookMapper extends ObjectMapper implements EntityResultMapper<BookModel> {

    private bookApiObjectProperties = {
        title: 'volumeInfo.title',
        description: 'volumeInfo.description',
        imageLink: 'volumeInfo.imageLinks.smallThumbnail',
        imageLinkLarge: 'volumeInfo.imageLinks.thumbnail',
        selfLink: 'selfLink',
        infoLink: 'volumeInfo.infoLink'

    };

    MapModelToResult(input: BookModel): Result {
        throw new Error('Method not implemented.');
    }

    MapAnyToResult(input: any): Result {
        const result = new Result(input.id);

        result.title = this.Property(input, this.bookApiObjectProperties.title);
        result.description = this.Property(input, this.bookApiObjectProperties.description);
        result.imageLink = this.Property(input, this.bookApiObjectProperties.imageLink);

        result.link = this.Property(input, this.bookApiObjectProperties.infoLink);

        result.internalLink = `/books/${result.id}`;

        return result;
    }

    // Can do checkings on input if necessary
    MapAnyToEntity(input: any): BookModel {
        const model = new BookModel();

        console.log('MApping Input to BookModel. Input: ', input);

        model.id = input.id;

        model.title = this.Property(input, this.bookApiObjectProperties.title);
        model.description = this.Property(input, this.bookApiObjectProperties.description);
        model.imageLink = this.Property(input, this.bookApiObjectProperties.imageLinkLarge);
        model.link = this.Property(input, this.bookApiObjectProperties.infoLink);

        return model;
    }
}
