// const numbers=[1,2,3,4,5,6,8,68,4];
// numbers.map(multiplyNumbers);
// function multiplyNumbers(item){
//     console.log(item*20)

// }
// let artists = [
//     "Smash Mouth",
//     "Janelle Monae",
//     "SZA",
//     "Thunder Cat",
//     "Frank Ocean",
//     "Solange",
//   ];
  
//   artists.filter(function (artist) {
//     console.log(artist.startsWith("S"));
//   });
// const artists = ["Janelle Monae", "Sza", "Thunder Cat", "Frank Ocean"];

// const numberedArtists = artists.splice(function (artist, index) {
//   return `${index + 1}. ${artist}`;
// });
// console.log(numberedArtists);
const expenses = [25, 99, 1000, 350];

const total = expenses.map(function (total, expense) {
  console.log(total + expense);
}, 0);