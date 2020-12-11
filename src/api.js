
const dummy_function = () => {
    return true;
}

const LEAP="LEAP";
const NOT_LEAP="NOT LEAP";
const isLeap=(year)=>{

    return ((isDivisibleBy100(year))?(isDivisibleBy400(year)):(isDivisibleBy4(year)))?LEAP:NOT_LEAP;
}

const isDivisibleBy100=(year)=>{return year%100===0};

const isDivisibleBy400=(year)=>{return year%400===0};

const isDivisibleBy4=(year)=>{return year%4===0};

module.exports = {
    dummy_function : dummy_function,
    isLeap:isLeap
}