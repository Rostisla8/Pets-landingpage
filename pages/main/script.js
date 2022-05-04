//burger menu activing and deactivating

let container = document.querySelector('.pets-card-box');
let prew_button = document.querySelector('.prev');
let next_button = document.querySelector('.next');
let count = 0;
let pets;

const screenWidth = window.screen.width
const screenHeight = window.screen.height

/*modal*/
let modal = document.querySelector('.modal')
let modal_container = document.querySelector('.modal-pets-box')
let holderButton;


async function getData() {
const URL = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/markups/level-2/shelter/pets.json';
let data = await fetch(URL);
res = await data.json()
pets = [...res]
writeCards(count)

document.querySelectorAll('.pets-card-btn').forEach((el)=>{
el.addEventListener('click' , function(){
    let id = el.id
    modal.classList.add('modal-active');
    document.body.style.overflow = 'hidden';
    modal_container.innerHTML = writeModal(id)
    modalcloses = document.querySelector('.modal-close')
    modalcloses.addEventListener('click' , function(event){
    modal.classList.remove('modal-active');
    document.body.style.overflow = '';
    }) 
})
})
}


next_button.addEventListener('click' , function(){
console.log(count)
getData()
writeCards(count)
if (count > pets.length-4){
    count = 0
}else{
    count = count+1
}
console.log(pets.length)
})

prew_button.addEventListener('click' , function(){
console.log(count)
getData()
writeCards(count)
if (count <= 0){
    count = pets.length -3
}else{
    count = count-1
}

})

modal.addEventListener('click', (e)=>{
const target = e.target;
if(target.dataset.modal === 'close'){
    modal.classList.remove('modal-active');
    document.body.style.overflow = '';
}
});




function writeModal(id){
return `
<div class="modal-foto">
<img  src=${pets[id].img} alt="jennifer">
</div>
<div class="pets-info-box">
<div class="modal-title">${pets[id].name}</div>
<div class="modal-subtitle">${pets[id].breed}</div>
<p class="modal-text">
${pets[id].description}
</p>
<ul class="modal-info-more">
    <li><span>Age:</span>${pets[id].age}</li>
    <li><span>Inoculations: </span>${pets[id].inoculations}</li>
    <li><span>Diseases: </span>${pets[id].diseases}</li>
    <li><span>Parasites: </span>${pets[id].parasites}</li>
</ul>
</div>
<div class="modal-close"></div>
`
}

function writeCards(count){
    container.innerHTML = `
    <div class="pets-card" data-card="katrine">
<img class='pets-img' src=${pets[count].img} alt="katrine">
<div class="pets-name">${pets[count].name}</div>
<button id = ${count} class="pets-card-btn">Learn more</button>
</div>
<div class="pets-card" data-card="jennifer">
<img class='pets-img' src=${pets[count+1].img}>
<div class="pets-name">${pets[count+1].name}</div>
<button id = ${count+1} class="pets-card-btn">Learn more</button>
</div>
<div class="pets-card" data-card="woody">
<img class='pets-img' src=${pets[count+2].img} alt="woody">
<div class="pets-name">${pets[count+2].name}</div>
<button id = ${count+2} class="pets-card-btn">Learn more</button>
</div>

`

}

getData()










const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');
const burgerBG = document.querySelector('.deactive');
const navLinks = document.querySelectorAll('.nav-link a');

burgerMenu.addEventListener('click', () => {
if (burgerMenu.classList.contains('burger-menu-active')) {
    clearActiveBurger()
} else {
    addActiveBurger();
}
});

//clear burger activity if click navLinks
navMenu.addEventListener('click', (e) => {
navLinks.forEach(item => {
    if (e.target === item) {
        clearActiveBurger();
    }
})
});
burgerBG.addEventListener('click', clearActiveBurger);


let screnWidth = document.documentElement.offsetWidth;
window.addEventListener('resize', () => {
const pageWidth = document.documentElement.scrollWidth;
const windowInnerWidth = window.innerWidth;
screnWidth = document.documentElement.offsetWidth;
if (pageWidth > 767 || windowInnerWidth > 767) {
    clearActiveBurger();
}
});

function addActiveBurger() {
burgerMenu.classList.add('burger-menu-active');
navMenu.classList.add('nav-active');
document.body.style.overflow = 'hidden';
burgerBG.classList.add('body-active');
}

function clearActiveBurger() {
burgerMenu.classList.remove('burger-menu-active');
navMenu.classList.remove('nav-active');
document.body.style.overflow = '';
burgerBG.classList.remove('body-active');
}




