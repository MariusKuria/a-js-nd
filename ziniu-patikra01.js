// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// const arr = [];

// for (let i = 0; i < 10; i++) {
//     arr.push(getRandomIntInclusive(1, 11))
// }

// console.log(arr);

// -------------------- NAMU DARBAI------------------

// 1.......Programiškai ridenkite du žaidimo kauliukus- sugeneruokite du atsitiktinius skaičius nuo 1 iki 6 Jeigu kauliukų suma didesnė nei 8 
// jūs laimėjote, priešingu atveju pralošėte. Išveskite atsakymą, kuriame būtų abiejų kauliukų reikšmės ir išvada laimėjote ar pralošėte.

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
// }

// const number1 = Math.floor(Math.random() * 6 + 1);
// const number2 = Math.floor(Math.random() * 6 + 1);
// const sum = number1 + number2
// if (sum > 8) {
//   console.log(`'Your scores are ${number1} and ${number2}, so the result is ${sum}. You Won!!!'`)
// } else console.log(`'Your scores are ${number1} and ${number2}, so the result is ${sum}. You Lost!!!'`)

// ---------------------------
// 2........Gyveno du katinukai, Pilkis ir Murklys. Jų svoriai kilogramais buvo atsitiktiniai dydžiai nuo 3 iki 6. 
// Parašyti programą, kuri išvestų katinukų svorius ir apskaičiuotų, kuris katinukas yra lengvesnis. 
// Atsakymas turi būti katinukų vardai su jų svoriais ir lengvesnio katinuko vardas. Jeigu katinukai sveria vienodai, 
// vietoj katinuko vardo parašykite, kad “katinukų svoriai vienodi”.
// const Murkis = Math.floor(Math.random() * 4 + 3);
// const Rainis = Math.floor(Math.random() * 4 + 3);

// if (Murkis > Rainis) {
//   console.log(`'The weights of Murkis is ${Murkis} and of Rainis is ${Rainis}, so the Rainis is lighter.'`)
// } else if (Murkis < Rainis) {
//   console.log(`'The weights of Murkis is ${Murkis} and of Rainis is ${Rainis}, so the Murkis is lighter.'`)
// }
// ---------------------------------------
// 3.........Nojus pasiruošė potvyniui ir nusipirko dvi valtis. Vienoje telpa 15 katinukų, kitoje 15 karvių (katinukus galima sodinti tik į katinukų valtis, 
// o karves tik į karvių, maišyti negalima) Prasidėjus liūčiai pas Nojų atėjo atsitiktinis skaičius nuo 0 iki 30 katinukų ir toks pats atsitiktinis skaičius karvių. 
// Išveskite atėjusių katinukų ir karvių skaičių ir ar Nojus galės juos sutalpinti į valtis. Jeigu netelpa tik katinukai arba tik karvės vistiek išveskite “Netelpa”. 
// Kas konkrečiai netelpa išvedinėti nereikia. “Telpa” išveskite tik tuo atveju jeigu ir katinukai ir karvės telpa.

// const catboat = Math.floor(Math.random() * 31);
// const cowboat = Math.floor(Math.random() * 31);

// if (catboat > 15 || cowboat > 15) {
//   console.log(`Cats came to boat ${catboat} and cows came to boat ${cowboat}. 'Netelpa.'`)
// } else if (catboat < 15 && cowboat < 15) {
//   console.log(`Cats came to boat ${catboat} and cows came to boat ${cowboat}. 'Telpa.'`)
// }
// ------------------------------------
// 4........Antanas nusipirko naują butą ir pinigų jam liko nedaug. Dabar jis niekaip negali apsispręsti ką pirmiausiai pirkti: televizorių, skalbimo mašiną ar šaldytuvą. 
// Todėl nusprendžia ridenti kauliuką (atsitiktinis skaičius nuo 1 iki 6) ir jeigu iškris 1 arba 5 pirkti televizorių, jeigu 3 arba 4 pirkti skalbimo mašiną ir jeigu 2 arba 6 - šaldytuvą. 
// Padėkite Antanui apsispręsti. Ridenkite kauliuką ir parašykite atsakymą kokį daiktą jam pirkti.

// const diceNumber = Math.floor(Math.random() * 6 + 1);
// // const cowboat = Math.floor(Math.random() * 6 + 1);

// if (diceNumber == 1 || diceNumber == 5) {
//   console.log(`Antanas should buy TV. The score is ${diceNumber}.'`)
// } else if (diceNumber == 3 || diceNumber == 4) {
//   console.log(`Antanas should buy washing mashine. The score is ${diceNumber}.'`)
// } else if (diceNumber == 2 || diceNumber == 6) {
//   console.log(`Antanas should buy refrigerator. The score is ${diceNumber}.'`)
// }
// ---------------------------------------
// 5............(BOSO lygis) Sugeneruokite tris atsitiktinius skaičius nuo 1 iki 7. Skaičius atspausdinkite nuo mažiausio iki didžiausio. 
// Pavyzdžiui: sugeneravus 4, 2, 4 juos reikia atspausdinti tokia tvarka: 2 4 4;

const sortNumber = [...Array(3)].map(_ => Math.floor(Math.random() * 7 + 1)).sort();

console.log(sortNumber);



