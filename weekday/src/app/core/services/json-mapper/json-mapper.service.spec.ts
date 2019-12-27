import '../../util/init.util';
import { TestModel } from './../../models/test.model';
import { TestBed } from '@angular/core/testing';
import { JsonMapperService } from './json-mapper.service';

describe('JsonMapperService', () => {

    let jsonMapperService: JsonMapperService;

    const json: any =
    {
        "my_type":  "TestModel",
        "my_name": "John",
        "phone": 5555555555,
        "nestedObject": {
            "my_type":  "Test2Model",
            "name": "Bob"
        },
        "nestedArray": [
            {
                "my_type":  "Test2Model",
                "name": "Bob"
            },
            {
                "my_type":  "Test2Model",
                "name": "Bob"
            }
        ]
    };

    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [
                JsonMapperService
            ]
        });

        jsonMapperService = TestBed.get(JsonMapperService);

    });

    it('should deserialize an object', () => {

        const result: TestModel = jsonMapperService.deserializeObject<TestModel>(json);

        expect(result).toBeTruthy('Json object not parsed correctly');
        expect(result.name).toEqual('John');
        expect(result.phone).toEqual(5555555555);
    });

    it('should deserialize a nested custom object', () => {

        const result: TestModel = jsonMapperService.deserializeObject<TestModel>(json);

        expect(result).toBeTruthy('Json object not parsed correctly');
        expect(result.nestedObject).toBeTruthy('Nested object not parsed correctly');
        expect(result.nestedObject.name).toEqual('Bob');
    });

    it('should deserialize a nested custom Array', () => {

        const result: TestModel = jsonMapperService.deserializeObject<TestModel>(json);

        expect(result).toBeTruthy('Json object not parsed correctly');
        expect(result.nestedArray).toBeTruthy('Nested Array not parsed correctly');
        expect(result.nestedArray.length).toEqual(2);
        expect(result.nestedArray[0].name).toEqual('Bob');
    });

    it('should deserialize a non-empty Array', () => {

        const jsonArray: any[] = [json, json];

        const result: TestModel[] = jsonMapperService.deserializeArray<TestModel>(jsonArray);

        expect(result).toBeTruthy();
        expect(result.length).toEqual(2);
        expect(result[0]).toBeTruthy('Json object not parsed correctly');
        expect(result[0].name).toEqual('John');
        expect(result[0].phone).toEqual(5555555555);
    });

    it('should deserialize an empty Array', () => {

        const jsonArray: any[] = [];

        const result: TestModel[] = jsonMapperService.deserializeArray<TestModel>(jsonArray);

        expect(result).toBeTruthy();
        expect(result.length).toEqual(0);
    });

});
