
// 2. Write a function that takes an array of numbers and returns a new array with all the odd numbers using recursion.


debugger;

function checkOddNumber(numArrFunc,index) {
    let newOddArr = []
    let newEveArr = []
    
    function checkODD(numArrFunc) {
        for (let i = 0; i < index; i++) {
            const oddNumber = numArrFunc[i];
            if (oddNumber % 2 ===0) {
                newOddArr.push(oddNumber);
            }else{
                newEveArr.push(oddNumber);
                
            }
     }
    }checkODD(numArrFunc)
    console.log('Even Num is : ',newEveArr)
return newOddArr;
    
}
debugger;
const numArr = [1,2,4,5,7,8,9,12,14,16,11,13,19]
const sizeOfArr = numArr.length
console.log(numArr,sizeOfArr)
var result1 = checkOddNumber(numArr,sizeOfArr)
console.log('Odd num is : ',result1)