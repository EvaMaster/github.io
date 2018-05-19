var arr = [3, 8, 5, 10, 11, 9, 1, 4, 12, 7];
var count = arr.length-1;
for (var i = 0; i < count; i++){
     for (var j = 0; j < count-i; j++){
        if (arr[j]> arr[j+1]) {
           var maxArr = arr[j];
           arr[j] = arr[j+1];
           arr[j+1] = maxArr;
        }
    }
}

console.log(arr);
