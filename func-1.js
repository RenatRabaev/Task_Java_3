
// 1. Write a function that takes an array of strings and returns a new array 
// with all the strings that start with the letter 'a' using recursion.

const myArr2 = ['strawberry', 'banana', "apple" , 'dragonfruit', "Apple" , 'cherry' ]
debugger;
function checkMyArr(myArr2) {
    let newArr = []
    
     function checkArrWord(myArr2) {
        for (let i = 0; i < myArr2.length; i++) {
            const checkWord = myArr2[i];
                for (let j = 0; j < 1; j++) {
            
                    if (((checkWord.startsWith("a")) == true) || ((checkWord.startsWith("A")) == true) ) {
                        newArr.push(checkWord);
                    }
                }
        }
     }checkArrWord(myArr2);
     return newArr;

}
debugger;
console.log(myArr2)
var result = checkMyArr(myArr2)
console.log(result)
