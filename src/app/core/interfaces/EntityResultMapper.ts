import { Result } from '../result/result.model';

export interface EntityResultMapper<T> {
    MapModelToResult(input: T): Result;
    MapAnyToResult(input: any): Result;
    MapAnyToEntity(input: any): T;
}
