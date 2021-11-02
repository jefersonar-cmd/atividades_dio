const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArgs){
    return arr.map(function(item){
        return item * this.value
    }, thisArgs)
}

const nums = [1,3]

console.log('this --> maçã ' + mapComThis(nums, maca));

console.log('this --> laranja ' + mapComThis(nums, laranja));

const array = [1,2,3,4,5,6]

function mapSemthis(arr){
    return arr.map((item) => item * 2)
}

console.log('Sem This ' + mapSemthis(array));