function merge(arr1, arr2) {
  var arr3 = [];

  for(let a of arr1) 
    arr3.push(a);

  for(let b of arr2)
    arr3.push(b);
    
  return arr3.sort();  

}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);

