
const range = (start, end, step) => {

  var A = [];

  if(start === undefined || end === undefined || step === undefined)
    return [];
  if(start > end)
    return [];
  if(step <= 0)
    return [];    


    for(let i = start; i <= end; i += step)
      A.push(i);

  return A;    
}


console.log(range(0, 10, 2));

