
const dummy_function = () => {
    return true;
}

const isLeap=(year)=>{

    if(year%400===0){
        return "LEAP";
    }
    if(year%100===0){
        return "NOT LEAP";
    }
    if(year%4===0){
        return "LEAP"
    }

    return "NOT LEAP"
}

module.exports = {
    dummy_function : dummy_function,
    isLeap:isLeap
}