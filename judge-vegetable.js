function judgeVegetable(veges, type) {
  var max = veges[0][type];
  var winner = veges[0].submitter;

  for(let element of veges){    
    if(max < element[type]){
      winner = element.submitter;
      max = element[type];
    }      
  }
  return winner;
}


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness'


console.log(judgeVegetable(vegetables, metric));