import * as _ from 'lodash';

export class ObjectMapper {
    Property(input: any, path: string, defaultValue: any = null): any {
        if (_.has(input, path)) {
            return _.get(input, path);
        } else {
            return defaultValue;
        }
    }
}
