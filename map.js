//map_: Iterate an array elements and modify the array elements. 
//It takes a callback function with elements,  index , array parameter and return a new array
const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare)


///
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  const countriesToUpperCase = countries.map((country) => country.toUpperCase())
  console.log(countriesToUpperCase)
  const countriesFirstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3))
  console.log(countriesFirstThreeLetters)


  //Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
country.includes('land')
)
console.log(countriesContainingLand)
const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia)


//example2 filter arrays using filter
const scores = [
    { name: 'Asabeneh', score: 95 },
     { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]
  
  const scoresGreaterEighty = scores.filter((score) => score.score > 80)
  console.log(scoresGreaterEighty)