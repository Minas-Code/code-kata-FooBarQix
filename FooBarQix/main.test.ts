import {FooBarQuix} from "./main";

const testMatrix: [string, string][] = [
    ["1" ,  "1"],
    ["2" ,  "2"],
    ["3" ,  "FooFoo"],
    ["4" ,  "4"],
]

describe('FooBarQix', () => {
    testMatrix.forEach(([input, output]) =>{
        it(`should return ${output} for ${input}`, () => {
            expect(FooBarQuix(input)).toEqual(output)
        })
    })
    // it('should return FooFoo for 3', () => {
    //     expect(FooBarQuix('3')).toEqual('FooFoo')
    // })
    //
    // it('should return BarBar on 5', () => {
    //     expect(FooBarQuix('5')).toEqual('BarBar')
    // });
    // it('should return QixQix on 7', () => {
    //     expect(FooBarQuix('7')).toEqual('QuixQuix')
    // });
    // it('should return FooBarBar on 15', () => {
    //     expect(FooBarQuix('15')).toEqual('FooBarBar')
    // });
    // it('should return FooFooFoo on 33', () => {
    //     expect(FooBarQuix('33')).toEqual('FooFooFoo')
    // });
    // it('should return FooBarQuixBar on 105', () => {
    //     expect(FooBarQuix('105')).toEqual('FooBarQuixBar')
    // });
});
