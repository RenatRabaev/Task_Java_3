
// 2. Write a function that takes an array of 
// strings and returns a new array with all the strings converted to uppercase using recursion.

const myArr2 = ['strawberry', 'banana', "apple" , 'dragonfruit', "Apple" , 'cherry' ]
debugger;
function checkMyArr(myArr2) {
    let newArr = []
    
     function checkArrWord(myArr2) {
        for (let i = 0; i < myArr2.length; i++) {
            const checkWord = myArr2[i];
                for (let j = 0; j < 1; j++) {    
                    newArr.push(checkWord.toUpperCase());
                }
        }
     }checkArrWord(myArr2);
     return newArr;

}
debugger;
console.log(myArr2)
var result = checkMyArr(myArr2)
console.log(result)
