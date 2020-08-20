var log = [];

function carPassing(cars, speed){
  var pass = {
    speed: -1,
    time: -1,
  };
  pass.speed = speed;
  pass.time = Date.now();

  cars.push(pass);

  return cars;

}

carPassing(log, 42);
carPassing(log, 51);
carPassing(log, 64);
carPassing(log, 100);
carPassing(log, 10);
carPassing(log, 30);

console.log(log);