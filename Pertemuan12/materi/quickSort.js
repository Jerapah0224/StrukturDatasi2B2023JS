function quickSort(arr){
    if (arr.length <= 1){
        return arr;
    }
    const pivot = arr[0];
    const less = [];
    const greater = [];
    for (let i = 1; i < arr.length; i++){
        if(arr[i] <= pivot){
            less.push(arr[i]);
        }else{
            greater.push(arr[i]);
        }
    }
    return quickSort(less).concat(pivot, quickSort(greater));
}
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Array awal: ", arr);
const sortedArr = quickSort(arr);
console.log("Array terurut: ", sortedArr);