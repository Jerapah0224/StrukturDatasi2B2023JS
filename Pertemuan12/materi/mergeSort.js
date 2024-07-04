function merge(kiri, kanan){
    const hasil = [];
    let i = 0;
    let j= 0;
    while(i < kiri.lenght && j < kanan.lenght){
        if(kiri[i] <= kanan[j]){
            hasil.push(kiri[i]);
            i++;
        } else {
            hasil.push(kanan[j]);
            j++;
        }
    }
    return hasil.concat(kiri.slice(i)).concat(kanan.slice(j));
}

function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    const tengah = Math.floor(arr.length / 2);
    const kiri = arr.slice(0, tengah);
    const kanan = arr.slice(tengah);
    return merge(mergeSort(kiri), mergeSort(kanan));
}
const arr = [38,27,43,3,9,82,10];
console.log("Array asli: ", arr);
const arrTerurut = mergeSort(arr);
console.log("Array terurut : ", arrTerurut);