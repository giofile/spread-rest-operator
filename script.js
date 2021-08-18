
const test = function (...nums){
  return nums.reduce( (result,current)=> result+current)
}

console.log(test(1,2,3,4,5,6,76,39,50,14));


const berekening = function(...nums){
  return nums.reduce( (result, current) => result+current)
}

cijferArray = [1,2,3,4,5,6,76,39,50,14]



console.log(berekening(...cijferArray));