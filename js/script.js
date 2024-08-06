// 1-masala

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function countOddNums(arr) {
//     let counter = 0;
//     for (const element of arr) {
//         if (element % 2 == 1) {
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(countOddNums(arr));



// 2-masala

// let str = '1s2a3l4o5m6';

// function findNums(str) {
//     let arr = [];
//     for (const element of str) {
//         if (typeof element == 'number') {
//             arr.push(element);
//         }
//     }
//     return arr;
// }
// console.log(findNums(str));



// 3-masala

// let str = 'Salom men Oltinbekman';

// function strLength(str) {
//     return str.split(' ').length;
// }
// console.log(strLength(str));



// 4-masala

// let arr = [1223, 435, 235, 5747, 65, 3];

// function minOfArray(arr) {
//     let min = arr[0];
//     for (const element of arr) {
//         if (min > element) {
//             min = element;
//         }
//     }
//     return min;
// }
// console.log(minOfArray(arr));



// 5-masala

// let str = 'salom men Oltinbek';

// function reverseStr(str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverseStr(str));




// 6-masala

// let num = 12345;

// function pOfNum(num) {
//     let str = num.toString();
//     let p = 1;

//     for (const element of str) {
//         p *= element;
//     }
//     return p;
// }
// console.log(pOfNum(num));



// 7-masala

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function sort(arr) {
//     arr.sort((a, b) => {
//         return b - a;
//     })
//     return arr;
// }
// console.log(sort(arr));



// 8-masala

// let str = 'Salom men dasturchiman';
// let remove = 'Salom';

// function removeWord(str, remStr) {
//     return str.replaceAll(remStr, '')
// }
// console.log(removeWord(str, remove));



// 9-masala

// let arr = ['salom', 'olma'];

// function toUpperCase(arr) {
//     return arr.map(value => value.toUpperCase())
// }
// console.log(toUpperCase(arr));


// 10-masala

// let nums = [1, 2,3 , 4, 5, 6, 7, 8,9];

// function oddNums(nums) {
//     let res = [];
//     for (const element of nums) {
//         if (element % 2 == 1) {
//             res.push(element);
//         }
//     }
//     return res;
// }
// console.log(oddNums(nums));


// 11-masala

// let arr = ['olma', 'shaftoli', 'behi'];

// function minOfArray(arr) {
//     let max = arr[0].length;
//     for (const element of arr) {
//         if (max < element.length) {
//             max = element;
//         }
//     }
//     return max;
// }
// console.log(minOfArray(arr));

// 12-masala


// let num = [1, 2, 3, 4, 5];

// function sumOfNum(arr) {
//     let sum = 1;

//     for (const element of arr) {
//         sum += element;
//     }
//     return sum;
// }
// console.log(sumOfNum(num));

// 13-masala

// let nums = [1, 2,3 , -4, 5, -6, 7, -8,9];

// function oddNums(nums) {
//     let res = [];
//     for (const element of nums) {
//         if (element > 0) {
//             res.push(element);
//         }
//     }
//     return res;
// }
// console.log(oddNums(nums));

// 14-masala

let str = 'salom men';

function length(s) {
    let str = s.split(' ')
    let res = [];

    for (const element of str) {
        res.push(element.length)
    }
    return res;
}
console.log(length(str));
