const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimantė', 'Justė'];
const cats = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis'];

// 1..........Prie masyvo bitGirls pradžios (ne galo!) pridėkite Nausėdą (po pridėjimo bitGirls turės 6 elementus).

// const girlsPresident = bitGirls.unshift('Nauseda');
// console.log(bitGirls)

// -----------------------------------------------------------
// 2...........Sukurkite naują masyvą bitCats iš masyvo cats taip kad naujasis masyvas turėtų elementus iš mažų, dviejų narių, masyviukų: 
// pirmas narys katinuko vardas, antras - katinuko svoris - atsitiktinės tekstinės reikšmės - “storas” arba “normalus”.

// const weight = () => {
//     if (Math.floor(Math.random() * 2) == 1) {
//         return 'storas'
//     } return 'plonas'
// }
// const bitCats = cats.map(i => [i + ' ' + weight()]);
// console.log(newArr)
// -----------------------------------------------------------

// 3............bitCats masyve suskaičiuokite kiek yra storų ir normalių katinukų.
// let storas = 0;
// let plonas = 0;

// const weight = () => {
//     if (Math.floor(Math.random() * 2) == 1) {
//         storas += 1
//         return 'storas';
//     } else {
//         plonas += 1
//         return 'plonas';
//     }
// }
// const newArr = cats.map(i => [i + ' ' + weight()]);
// console.log(newArr)
// console.log(`'Plonu katinu yra ${plonas}, o storu yra ${storas}'`);
// ----------------------------------------------------------------------
// 4..........Išrūšiuokite gautą bitsCats masyvą pagal antrą katinuko vardo raidę, abėcėlės tvarka (ne pagal visą vardą, o tik pagal antrą raidę) 
// Tokiu būdu katinukas vardu Rainius pagal antrą “a” raidę turėtų atsidurti viršuje.
const weight = () => {
    if (Math.floor(Math.random() * 2) == 1) {
        return 'storas'
    } return 'plonas'
}
const bitCats = cats.map(i => [i + ' ' + weight()]); // NEISPRESTAS]!!!!!!!!!!!!!!!   !!!!!!!!!!!
console.log(...bitCats)
const newSort = bitCats.sort((a, b) => a - b);
// const newSort = bitCats.sort((a, b) => a.substring(1) - b.substring(1));

console.log(newSort)
// ------------------------------------------------------------
// 5.............(BOSO lygis) Iš masyvų bitGirls ir bitCats padarykite masyvą happyCats, kurio elementai būtų masyvai iš mergaitės vardo ir katinuko vardo. 
// Nausėdai katinuko neduokit (nes neužteks) ir Nausėdai vietoj katinuko priskirkite stringą “Barsukas”.

// const addBarsukas = bitGirls.unshift('Barsukas')
// let happyCats = [];

// for (let i = 0; i < bitGirls.length; i++) {
//     happyCats.push(([bitGirls[i] + ' ' + cats[i]]))
// }
// console.log(...happyCats)