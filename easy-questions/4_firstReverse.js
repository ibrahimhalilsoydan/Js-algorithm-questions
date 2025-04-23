export const firstReverse =(str) =>{

    // .split()
    //.reverse()
    //.join()

    const arr = str.split("");
    const reverseArr =arr.reverse();
    const newStr = reverseArr.join("");
    
   // kısa yontem: return str.split("").reverse().join("");
    return newStr;
}

/*
 First Reverse 

 Have the function FirstReverse() take the str parameter
  being passed and return the string in reversed order

*/