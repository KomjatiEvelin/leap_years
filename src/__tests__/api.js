import api from '../api';

describe('Dummy Test Suite', ()=>{
    it('is a dummy test', ()=>{
        let expected = true;
        let actual = api.dummy_function();
        expect(actual).toBe(expected);
    })
})

describe('Divisibility with 400 test',()=>{
    it('is divisible by 400 ',()=>{
        let year=2000;
        let expected="LEAP";
        let actual=api.isLeap(year);
        expect(actual).toBe(expected);
    })
})

describe('Divisibility with 4 test',()=>{
    it('is not divisible by 4 ',()=>{
        let year=2010;
        let expected="NOT LEAP";
        let actual=api.isLeap(year);
        expect(actual).toBe(expected);
    })
})

describe('Divisibility with 4 and 100 test',()=>{
    it('is divisible by 4 and not divisible by 100',()=>{
        let year=2012;
        let expected="LEAP";
        let actual=api.isLeap(year);
        expect(actual).toBe(expected);
    })
})

describe('Divisibility with 4 and 100 test',()=>{
    it('is divisible by 4 and  divisible by 100',()=>{
        let year=2100;
        let expected="NOT LEAP";
        let actual=api.isLeap(year);
        expect(actual).toBe(expected);
    })
})