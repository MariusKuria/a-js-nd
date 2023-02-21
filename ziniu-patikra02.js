// 1........Vyksta automobilių žiedinės lenktynės. Automobiliui Nr. 55 liko nuvažiuoti 10 ratų. Suprogramuokite for ciklą, kuris imituotų 10 ratų automobilio
// važiavimą ir kiekviename cikle pateiktų (atspausdintų) kiek ratų dar liko automobiliui nuvažiuoti. Paskutinis skaičius turėtų būti 1. 
// Visas rezultatas turėtų būti toks:  10 9 8 7 6 5 4 3 2 1 (skaičiai gali būti atspausdinti stulpeliu).

// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// for (let i = 10; i >= 1; i--) console.log(`'Liko vaziuoti ${i}.'`)

// -----------------------------------------------------------------
// 2.........Vyksta automobilių žiedinės lenktynės. Automobiliui Nr. 55 liko nuvažiuoti 10 ratų. Kiekvieną ratą automobilis važiuoja skirtingu nuo 120 iki 220 km/h greičiu. 
// Suprogramuokite for ciklą, kuris imituotų 10 ratų automobilio važiavimą, rand() funkcija generuokite atsitiktinį automobilio greitį o visiems ciklams pasibaigus 
// pateikite bendrą visų 10 ratų vidutinį greitį.

// let speeds = 0;
// for (let i = 10; i >= 1; i--) {
//     const speed = Math.floor(Math.random() * (220 - 120 + 1) + 120);
//     speeds += speed
//     console.log(`'The average speed for sircle No ${i} is ${speed} km/h.'`)
// } console.log(`'The average speed of races is ${Math.floor(speeds / 10)} km/h.'`)
// -----------------------------------------------------------------
// 3............Vyksta automobilių žiedinės lenktynės. Automobiliui Nr. 55 liko nuvažiuoti 10 ratų. Jo kuro bake liko 44 litrai kuro. 
// Kiekviename rate automobilis sunaudoja atsitiktinį kiekį kuro: nuo 3 iki 6 litrų. Suprogramuokite for ciklą, kuris imituotų 10 ratų automobilio važiavimą, 
// o ciklams pasibaigus pateikite išvadą ar automobiliui užteko kuro įveikti visus 10 ratų. Kurui pasibaigus ciklą nutraukite anksčiau laiko. 

// let fuelLeft = 0;
// let fuelTank = 44
// for (let i = 10; i >= 1; i--) {
//     const usedFuel = Math.floor(Math.random() * 4 + 3);
//     fuelTank -= usedFuel
//     if (fuelTank <= 0) {
//         console.log('No fuel left for race!')
//     } else
//         console.log(`'The average fuel consumption for sircle No:${i} is ${usedFuel} l/100km. Fuel left ${fuelTank} liters.'`)
// }
// -----------------------------------------------------------------
// 4...........Vyksta automobilių žiedinės lenktynės. Automobiliui Nr. 55 liko nuvažiuoti 10 ratų (žiedų). Kiekviename žiede yra 5 posūkiai, 
// kuriuose automobilio greitis yra atsitiktinis dydis nuo 20 iki 120 km/h. Imituokite tokią situaciją dviem for ciklais (vienas 10 ratų, kitas 5 posūkiai) 
// ir ciklams pasibaigus atspausdinkite mažiausią automobilio greitį kažkuriame iš posūkių.

// let turnSpeeds = [];
// let lowestTurnSpeed = [];
// for (let i = 1; i <= 10; i++) {
//     for (let i = 1; i <= 5; i++) {
//         const avrSpeed = Math.floor(Math.random() * 101 + 20);
//         turnSpeeds.push(avrSpeed)
//         lowestTurnSpeed = Math.min(...turnSpeeds)
//     } console.log(`'The lowest speed on sircle ${i} was ${lowestTurnSpeed}'`)
// }
// console.log(`'The lowest speed on turn was ${lowestTurnSpeed} km/h.'`)

// -------------------------------------------------------------------------
// 5...........(BOSO lygis) Dykumoje vyksta lenktynės. Automobilis Nr. 55 juose dalyvauja. Kiekviename kilometre gali atsitikti arba neatsitikti rand(0, 1) tokie trys įvykiai: 
// netikėtai iššokti - neiišokti ant kelio kengūra, vairuotojas gali nespėti - spėti pasukti vairą ir vairuotojas gali nespėti - spėti paspausti stabdžius. 
// Imituokite tokią situaciją do while ciklu- vienas kilometras vienas ciklo prasisukimas. Cikle rand() funkciją atsitiktinai generuokite visų įvykių tikimybę. 
// Jeigu viename cikle įvyksta visi nepalankūs įvykiai: iššoka kengūra, vairuotojas nespėja pasukti vairo ir nespėja paspausti stabdžių while ciklą baikite. 
// Ciklo pabaigoje atspausdinkite kiek kilometų sugebėjo nuvažiuoti automobilis be avarijos.

// let kmPassed = 0;
// let accidents = 0

// function ivykiai() {
//     for (let i = 1; i <= 3; i++) {
//         const x = Math.floor(Math.random() * 2);
//         accidents += x
//         console.log(`'Susidurta ${accidents} kartus.'`)
//         if (accidents < 3) {
//             kmPassed += 1;
//         } else {
//             return console.log(`'Nuvaziuota ${kmPassed} km iki buvo ${accidents} susidurimai su gyvunais.'`)
//         }
//     }
// }
// do
//     ivykiai()

// while (accidents < 3)

