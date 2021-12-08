'use strict'

function intParser(str) {
    if (typeof str !== 'string') return 
    if (isNaN(str[0])) return "NaN";

    let parsed = '';
    for (let i=0; i<str.length; i++){
        if (/[0-9-]/.test(str[i])){
            parsed += str[i];
        } else {
            return Number(parsed);
        } 
    }  
}

console.log(intParser('123abc'));
console.log(intParser('F123abc'));
console.log(intParser('12.3abc'));