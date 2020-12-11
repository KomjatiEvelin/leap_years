import api from '../api';

describe('Dummy Test Suite', ()=>{
    it('is a dummy test', ()=>{
        let expected = true;
        let actual = api.dummy_function();
        expect(actual).toBe(expected);
    })
})

describe('Divisibility Test for Simple year',()=>{
    it('is divisible by 400 ',()=>{
        let year=2000;
        let expected="LEAP";
        let actual=api.isLeap(year);
        expect(actual).toBe(expected);
    })



    it('is not divisible by 4 ',()=>{
        let year=2010;
        let expected="NOT LEAP";
        let actual=api.isLeap(year);
        expect(actual).toBe(expected);
    })



    it('is divisible by 4 and not divisible by 100',()=>{
        let year=2012;
        let expected="LEAP";
        let actual=api.isLeap(year);
        expect(actual).toBe(expected);
    })


    it('is divisible by 4 and  divisible by 100',()=>{
        let year=2100;
        let expected="NOT LEAP";
        let actual=api.isLeap(year);
        expect(actual).toBe(expected);
    })
})

describe('Divisibility Test for array of years',()=>{
    it('is array elements leap or not',()=>{
        let years=[2000,2100,2012,2010];
        let expected=["LEAP","NOT LEAP","LEAP","NOT LEAP"];
        let actual=api.isLeaps(years);
        expect(actual).toStrictEqual(expected);
    })
})