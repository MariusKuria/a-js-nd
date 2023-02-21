// / 1.........Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius <h2> tagus ir vieną mygtuką. Paspaudus mygtuką kiekvienam tagui sugeneruotkite rand() 
// atskirą skaičių nuo 1 iki 6 ir jį įrašykite į tago vidų naudojant innerText() metodą. Paspaudus mygtuką skaičiai turi būti pergeneruojami iš naujo. 
// Jeigu sugeneruoti skaičiai yra vienodi, juos nudažyti raudonai.

let btn = document.querySelector('.btn');
let value1 = document.querySelector('.title1');
let value2 = document.querySelector('.title2');

btn.addEventListener('click', () => {
    if ((value1.innerText = Math.floor(Math.random() * 6 + 1)) ===
        (value2.innerText = Math.floor(Math.random() * 6 + 1))) {
        document.querySelector('.title1').style.color = 'red';
        document.querySelector('.title2').style.color = 'red';
    } else {
        document.querySelector('.title1').style.color = 'black'
        document.querySelector('.title2').style.color = 'black'
    }
});
// -------------------------------------------
// 2.........Tiesiogiai HTML faile rankiniu būdu sukurkite <h3> tagą ir vieną mygtuką. Susikurkite tuščią masyvą, 
// skaičiams saugoti. Paspaudus mygtuką, sugeneruokite rand() skaičių nuo 1 iki 10. Sugeneruotą skaičių 
// pridėkite į masyvą, o tą masyvą atspausdinkite konsolėle. <h3> tage skaičiuokite ir su innerText() metodu 
// rašykite visų sugeneruotų skaičių sumą.
let btn43 = document.querySelector('.btn43');
let tag43 = document.querySelector('.tag43');
let valueToPush = 0;
let newArr = [];

btn43.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * 10 + 1);
    valueToPush += randomNumber
    newArr.push(randomNumber);
    console.log(newArr)
    tag43.innerText = valueToPush
})
// ----------------------------------------
// 3..........Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. JS pagalba perskaitykite masyvą africa ir 
// naudodami createElement()  ir kitus reikalingus metodus sukurkite kiekvienam masyvo elementui 
// po <li> tagą su elemento stringu viduje ir juos įrašykite į <ul> tago vidų. Elementus su tuščiais 
// stringais praleiskite ir jiems <li> elementų nekurkite.

console.log('check')
const unordered = document.querySelector('.ul43')

const africa = ['Zebras', 'Liūtas', '', 'Raganosis', '', 'Raganosis', 'Begemotas'];
let africa1 = []

for (let i = 0; i < africa.length; i++) { // isfiltruojam ''
    africa1 = africa.filter(i => i != '');
    console.log(africa1)
}

for (let i = 0; i < africa1.length; i++) {
    const newLi = document.createElement('li')
    newLi.innerHTML = `${africa1[i]}`; // ipuciam i li stringus
    console.log(newLi)
    unordered.appendChild(newLi)
    console.log(unordered)
}
// ---------------------------------------------------
// 4.........Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius input laukelius, vieną <h5> tagą ir du mygtukus: “+” ir “-”. 
// Suprogramuokite kalkuliatorių taip, kad įrašius skaičius į abu input laukelius ir paspaudus atitinkamą mygtuką su skaičiais 
// būtų atlikta atitinkama aritmetinė operacija, o jos rezultatas būtų atvaizduotas <h5> tage. 
// Pasirinkite patys sau patogiausius metodus tai atlikti.

let firstInput = document.querySelector('.input1');
let secondInput = document.querySelector('.input2');
let plusButton = document.querySelector('.plus');
let minusButton = document.querySelector('.minus');
let result = document.querySelector('.result44');

plusButton.addEventListener('click', () => {
    const sumResult = Number(firstInput.value) + Number(secondInput.value);
    result.innerHTML = sumResult
    console.log(firstInput)

});

minusButton.addEventListener('click', () => {
    const minusResult = Number(firstInput.value) - Number(secondInput.value);
    result.innerText = minusResult
    console.log(minusResult)
});
// -----------------------------------------------
// 5.........(BOSO lygis) Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. JS pagalba perskaitykite masyvą australia
//  ir kiekvieną masyvo elementą įrašykite į strigą su <li> tagais iš abiejų pusių, o visus gautus stringus sudėkite 
//  į vieną bendrą stringą. Tą stirngą naudodami innerHTML() metodą įdėkite į <ul> tago vidų. 
//  Generavimo metu “Dingo” background’ą nuspalvinkite mėlynai.

const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

const ulAustralia = document.querySelector('.ulAustralia');

let newString = '';

for (let i = 0; i < australia.length; i++) {
    newString = australia.map(i => '<li>' + i + '</li>').join(' '); //sukurima stringa
    ulAustralia.innerHTML = newString; //stringa supuciam i ul
    console.log(typeof (newString));
    console.log(newString);
}


