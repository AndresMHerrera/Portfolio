import { TestBed } from '@angular/core/testing';
import { JsonMapperService } from './json-mapper.service';
import { JsonProperty } from './decorators/property.decorator';

class AssetTest {
    @JsonProperty('Name')
    name: string = undefined;
}

class PersonTest {
    @JsonProperty('FirstName')
    firstName: string = undefined;

    @JsonProperty('LastName')
    lastName: string = undefined;

    @JsonProperty('Age')
    age: number = undefined;

    @JsonProperty({ name: 'BirthDate', clazz: Date })
    birthDate: Date = undefined;

    @JsonProperty({ name: 'Assets', clazz: AssetTest})
    assets: AssetTest[] = [];
}

describe('JsonMapperService', () => {

    let jsonMapperService: JsonMapperService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                JsonMapperService
            ]
        });

        jsonMapperService = TestBed.get(JsonMapperService);
    });

    it('should deserialize an object with primitive types', () => {
        const json = {
            FirstName: "John",
            LastName: "Doe",
            Age: 55
        };

        const result: PersonTest = jsonMapperService.deserialize<PersonTest>(PersonTest, json) as PersonTest;

        expect(result instanceof PersonTest).toBeTruthy();
        expect(result.firstName).toEqual('John');
        expect(result.lastName).toEqual('Doe');
        expect(result.age).toEqual(55);
    });

    it('should deserialize a array of object of primitive types', () => {
        const json = [
            {
                FirstName: "John",
                LastName: "Doe",
                Age: 55
            },
            {
                FirstName: "John",
                LastName: "Doe",
                Age: 55
            },
            {
                FirstName: "John",
                LastName: "Doe",
                Age: 55
            }
        ];

        const result: PersonTest[] = jsonMapperService.deserialize<PersonTest>(PersonTest, json) as PersonTest[];

        expect(result.length).toEqual(3);

        expect(result[0] instanceof PersonTest).toBeTruthy();
        expect(result[0].firstName).toEqual('John');
        expect(result[0].lastName).toEqual('Doe');
        expect(result[0].age).toEqual(55);

        expect(result[1] instanceof PersonTest).toBeTruthy();
        expect(result[1].firstName).toEqual('John');
        expect(result[1].lastName).toEqual('Doe');
        expect(result[1].age).toEqual(55);

        expect(result[2] instanceof PersonTest).toBeTruthy();
        expect(result[2].firstName).toEqual('John');
        expect(result[2].lastName).toEqual('Doe');
        expect(result[2].age).toEqual(55);
    });


    it('should deserialize a object with a nested object', () => {
        const json = {
            FirstName: "John",
            LastName: "Doe",
            Age: 55,
            Assets: [
                {
                    Name: "House"
                }
            ]
        };

        const result: PersonTest = jsonMapperService.deserialize<PersonTest>(PersonTest, json) as PersonTest;

        expect(result instanceof PersonTest).toBeTruthy();
        expect(result.firstName).toEqual('John');
        expect(result.lastName).toEqual('Doe');
        expect(result.age).toEqual(55);

        expect(result.assets.length).toEqual(1);
        expect(result.assets[0] instanceof AssetTest).toBeTruthy();
        expect(result.assets[0].name).toBeTruthy('House');
    });

    it('should deserialize a object with Date', () => {
        const json = {
            FirstName: "John",
            LastName: "Doe",
            Age: 55,
            BirthDate: "2020-10-01T22:21:32.603Z",
            Assets: [
                {
                    Name: "House"
                }
            ]
        };

        const result: PersonTest = jsonMapperService.deserialize<PersonTest>(PersonTest, json) as PersonTest;

        expect(result instanceof PersonTest).toBeTruthy();
        expect(result.firstName).toEqual('John');
        expect(result.lastName).toEqual('Doe');
        expect(result.age).toEqual(55);

        expect(result.birthDate instanceof Date).toBeTruthy();
        expect(result.birthDate.getFullYear()).toBeTruthy(2020);
        expect(result.birthDate.getMonth()).toBeTruthy(9);
        expect(result.birthDate.getDay()).toBeTruthy(1);

        expect(result.assets.length).toEqual(1);
        expect(result.assets[0] instanceof AssetTest).toBeTruthy();
        expect(result.assets[0].name).toBeTruthy('House');
    });

    it('should deserialize a empty array', () => {
        const json = [];
        const result: PersonTest[] = jsonMapperService.deserialize<PersonTest>(PersonTest, json) as PersonTest[];

        expect(result).toBeTruthy();
        expect(result.length).toEqual(0);
    });
});
