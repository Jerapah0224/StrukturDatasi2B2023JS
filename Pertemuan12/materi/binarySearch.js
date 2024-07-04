function binarySearch(arr, target){
    let low = 0;
    let high = arr.length - 1;

    while(low <= high){
        let mid = Math.floor((low + high) / 2);

        if(arr[mid] === target){
            return mid;
        } else if(arr[mid] < target){
            low = mid + 1;
        } else{
            high = mid - 1;
        }
    }
    return -1;
}

let arr = [3, 9, 10, 27, 38, 43, 82];
let target = 27;
let hasil = binarySearch(arr, target);
if(hasil !== -1){
    console.log(`Elemen ${target} ditemukan pada indeks ${hasil}`);
} else{
    console.log(`Elemen ${target} tidak ditemukan dalam array`);
}