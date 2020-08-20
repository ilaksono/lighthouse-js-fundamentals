const lastIndexOf = (arr, can) => {
  var ind = -1;
  arr.forEach(function(element, index){
    if(can === element)
      ind = index; 
  })
  
  
  if(ind === -1)
    return false;
  return ind;

}

console.log(`${lastIndexOf([0,1,4,1,2],1)} is the last index`);
