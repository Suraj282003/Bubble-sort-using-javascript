console.log("BUBBLE SORT USING JAVASCRIPT USING ITRATIVE METHOD")

let arr = [2, 5, 9, 6, 4];
console.log("Array: ", arr);

let n = prompt("How you want to sort an array Ascending(1) or Descending(2): ");
let n1 = Number.parseInt(n);

if(n1 == 1){
    for(let i=0;i<arr.length - 1;i++){
      for(let j=0; j<arr.length-i-1;j++){
        if (arr[j]>arr[j+1]) {
    
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
    }
  console.log("sorted array", arr);
}
else if(n1 == 2){
  for(let i=0;i<arr.length - 1;i++){
      for(let j=0; j<arr.length-i-1;j++){
        if (arr[j]<arr[j+1]) {
    
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
    }
  console.log("sorted array", arr);
}
else{
  console.log("PLEASE TYPE A VALID INPUT");
}
