
const dummy_function = () => {
    return true;
}

const isLeap=(year)=>{

    return ((year%100===0)?(year%400===0):(year%4===0))?"LEAP":"NOT LEAP";
}

module.exports = {
    dummy_function : dummy_function,
    isLeap:isLeap
}