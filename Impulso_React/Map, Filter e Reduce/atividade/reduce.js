function somaNumeros(arr){
    return arr.reduce(function(prev, current){
        return prev + current
    })
}

const arr = [1,5,2,12,67]

console.log('Reduce soma ' + somaNumeros(arr));