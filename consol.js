let arr = [7, 3, 8, 9, 2, 12];
let newArr = [];

for (let i = 0; i < arrr.length; i++) {
  if (arrr[i] > 5) {
    newArr.unshift(arr[i]);
  } else {
    newArr.push(arr[i]);
  }
}

console.log(newArr);
