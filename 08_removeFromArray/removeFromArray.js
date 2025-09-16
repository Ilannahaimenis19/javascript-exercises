const removeFromArray = function(arr, ...values) {
    values.forEach(value => 
        { if (arr.includes(value)) { 
            let index = arr.indexOf(value);
            arr.splice(index,1);
          } 
        }) 
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
