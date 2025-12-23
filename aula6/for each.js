const users = [
    { name: 'Alex', age: 15, contact: '(61)94545-5454' },
    { name: 'Emerson', age: 21, contact: '(61)95656-6565' },
    { name: 'Ian', age: 18, contact: '(61)96995-5995' },
    { name: 'Many', age: 12, contact: '(61)95426-7875' },
]

/*
users.forEach(function(item, index, array){
    console.log(item)
    console.log(index)
    console.log(array)
})
*/

users.forEach(function(item, index){
    if(item.age < 18){
        console.log(`Cliente ${item.name}, posição ${index} é menor de idade`)
    }
});