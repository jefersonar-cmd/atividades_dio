const arrayFilter = [1,2,5,7,8,9,10]

function filterPar(arr){
    return arr.filter(function(item){
        if (item % 2 === 0){
            return item
        }
    })
}

console.log('Filter par ' + filterPar(arrayFilter));