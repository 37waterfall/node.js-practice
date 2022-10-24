// https://www.tutorialkart.com/nodejs/node-js-foreach/

// 01------------------
// let array1 = ["a1", "b1", "c1"];

// array1.forEach((element) => {
//     console.log(element)
// })

// 02------------------

// let array1 = ["a1", "b1", "c1"];

// let myFunc = function(element) {
//     console.log(element)
//     // console.log(myFunc)
// }

// array1.forEach(myFunc)


// 03------------------

let array1 = ["a1", "b1", "c1"];

let myFunc = function(element, index, array) {
    console.log(index + ' : ' + element + ' - ' + array[index] )
}

array1.forEach(myFunc)




