// Reikalavimui JS kodui: turi būti sukurtas masyvas balls ir klasė ColorBall.
// Reikalavimui HTML: turi būti sukurti du laukeliai duomenims įvesti- spalvai ir numeriui; vieta, kurioje bus atvaizduojami sukurti rutuliukai, 
// du mygtukai- “sukurti naują” ir “ištrinti seniausią”. Klases ar kitus elementų atributus galite pridėti jeigu manote, kad jie jums yra 
// reikalingi. Galite naudoti CSS tiek atskirame faile, tiek <style> viduje ar inline be jokių ribojimų.

// 1.........Sukurti klasę ColorBall, kuri turėtų dvi savybes: color ir number. Savybės turi būti įrašomos objekto kūrimo metu. Kiekvienas sukurtas naujas 
// objektas turi būti pridedamas į masyvą balls.
// class ColorBall {
//     constructor(color, number) {
//         this.color = color;
//         this.number = number;
//     }
// }
// let balls = []

// const newBall = new ColorBall('red', 1)
// console.log(newBall)
const result = document.querySelector('.mainb')
const mainb = document.querySelector('.ball')
const ball = document.createElement('div')
ball.style.backgroundColor = 'red'
ball.style.borderRadius = '50%'
ball.style.width = '50px'
ball.style.height = '50px'
result.innerHTML = ball