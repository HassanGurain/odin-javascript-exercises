const repeatString = function(mystring,repatednum) {
    if (repatednum < 0) return 'ERROR';
    let repeatedstring = '';
    for (let i = 0; i <repatednum; i++){
        repeatedstring+=mystring;
    }
    return repeatedstring;
};

// Do not edit below this line
module.exports = repeatString;
