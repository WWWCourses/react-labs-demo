const numbers = [1,2,3]
let numerItems = [];

// for (let i = 0; i < numbers.length; i++) {
// 	str += numbers[i]
// }

// numbers.forEach( v=> str += v)

numerItems = numbers.map( number=>`<li>${number}</li>` )


console.log(numerItems);