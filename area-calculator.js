const calculateRectangleArea = function (length, width){
  if (length * width >= 0)
    return length * width;
}

const calculateTriangleArea = function (base, height) {
  area = base * height / 2;
  if (area >= 0)  
    return area;
  
}

const calculateCircleArea = function (radius) {
  var area = Math.PI * radius * radius;


  if (area >= 0)
    return area;
}

console.log(calculateCircleArea(4));




