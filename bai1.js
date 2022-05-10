function adjacentElementsProduct(inputArray) {
    let t =0;
    for (let i =0; i<inputArray.length-1;i++)
    if (inputArray[i]* inputArray[i + 1] > t)
    t = inputArray[i]* inputArray[i +1];
    return t .toString();
}
console.log("tich 2 so lien ke lon nhat:"+ adjacentElementsProduct([2,3,-5,-2,4]));