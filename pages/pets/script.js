//burger menu activ and deactivating
const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');
const burgerBG = document.querySelector('.deactive');
const navLinks = document.querySelectorAll('.nav-link a');

burgerMenu.addEventListener('click', ()=>{
if(burgerMenu.classList.contains('burger-menu-active')){
    clearActiveBurger()
}else{
    addActiveBurger();
}
});

//clear burger activity if click navLinks
navMenu.addEventListener('click', (e)=>{
navLinks.forEach(item=>{
    if(e.target === item){
        clearActiveBurger();
    }
})
});
burgerBG.addEventListener('click', clearActiveBurger);



function addActiveBurger(){
burgerMenu.classList.add('burger-menu-active');
navMenu.classList.add('nav-active');
document.body.style.overflow = 'hidden';
burgerBG.classList.add('body-active');
}

function clearActiveBurger(){
burgerMenu.classList.remove('burger-menu-active');
navMenu.classList.remove('nav-active');
document.body.style.overflow = '';
burgerBG.classList.remove('body-active');
}



const petsInfo = [
{
    "name": "Jennifer",
    "img": "../../assets/images/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
},
{
    "name": "Sophia",
    "img": "../../assets/images/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
},
{
    "name": "Woody",
    "img": "../../assets/images/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
},
{
    "name": "Scarlett",
    "img": "../../assets/images/scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
},
{
    "name": "Katrine",
    "img": "../../assets/images/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
},
{
    "name": "Timmy",
    "img": "../../assets/images/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
},
{
    "name": "Freddie",
    "img": "../../assets/images/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
},
{
    "name": "Charly",
    "img": "../../assets/images/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
}
];

const petsCardBox = document.querySelector('.pets-box');
const modal = document.querySelector('.modal');
const modalBox = document.querySelector('.modal-pets-box');


function createPetsCard(name, img, description, type, breed, age, inoculations, diseases, parasites) {
const petsImg = document.createElement('img');
petsImg.alt = name;
petsImg.src = img;
petsImg.classList.add('pets-img');

const petsName = document.createElement('div');
petsName.innerText = name;
petsName.classList.add('pets-name');

const petsCardBtn = document.createElement('button');
petsCardBtn.classList.add('pets-card-btn');
petsCardBtn.textContent = 'Learn more';

const petsCard = document.createElement('div');
petsCard.classList.add('pets-card', 'fadeIn');
petsCard.dataset.card = name;
petsCard.append(petsImg, petsName, petsCardBtn);

petsCard.addEventListener('click', ()=>{
    modalBox.innerHTML = '';
    const modalFoto = document.createElement('div');
    modalFoto.classList.add('modal-foto');
    const modalImg = document.createElement('img');
    modalImg.src = img;
    modalImg.alt = name;
    modalFoto.append(modalImg);

    const petsInfoBox = document.createElement('div');
    petsInfoBox.classList.add('pets-info-box');

    const modalTitle = document.createElement('div');
    modalTitle.classList.add('modal-title');
    modalTitle.textContent = name;

    const modalSubtitle = document.createElement('div');
    modalSubtitle.classList.add('modal-subtitle');
    modalSubtitle.textContent = `${type} - ${breed}`;

    const modalText = document.createElement('p');
    modalText.classList.add('modal-text');
    modalText.textContent = description;
    const modalInfoMore = document.createElement('ul');
    modalInfoMore.classList.add('modal-info-more');
    modalInfoMore.innerHTML = `
        <li><span>Age:</span> ${age}</li>
        <li><span>Inoculations: </span>${inoculations}</li>
        <li><span>Diseases: </span>${diseases}</li>
        <li><span>Parasites: </span>${parasites}</li>`;
    
    petsInfoBox.append(modalTitle, modalSubtitle, modalText, modalInfoMore);

    const modalClose = document.createElement('div');
    modalClose.classList.add('modal-close');

    modalBox.append(modalFoto, petsInfoBox, modalClose);

    modal.classList.add('modal-active');
    document.body.style.overflow = 'hidden';

    modalClose.addEventListener('click', ()=>{
        modal.classList.remove('modal-active');
        document.body.style.overflow = '';
    });
    modal.addEventListener('mousemove', (e)=>{
        if(e.target.dataset.modal === 'close'){
            modalClose.style.backgroundColor = '#FDDCC4';
        }else{
            modalClose.style.backgroundColor = '';
        }
    });
});
petsCardBox.append(petsCard);
}
modal.addEventListener('click', (e)=>{
const target = e.target;
if(target.dataset.modal === 'close'){
    modal.classList.remove('modal-active');
    document.body.style.overflow = '';
}
});

let screnWidth = document.documentElement.offsetWidth;
let allNumberPage;
let allCardNumber;
window.addEventListener('resize', ()=>{
const pageWidth = document.documentElement.scrollWidth;
const windowInnerWidth = window.innerWidth;
screnWidth = document.documentElement.offsetWidth;

if(pageWidth>767 || windowInnerWidth>767){
    clearActiveBurger();
}
});


if(screnWidth>=768 && screnWidth<1280){
allNumberPage = 8;
allCardNumber = 6;
}else if(screnWidth>=1280){
allNumberPage = 6;
allCardNumber = 8;
}else{
allNumberPage = 16;
allCardNumber = 3;
}



let arrPetsCardPages = [];

function createRandomCards(){
let arr = [];
for(let i=0; i<allCardNumber; i++){
    const random = Math.floor(Math.random()*8);
    if(arr.includes(random)){
        i--;
    }else{
        arr.push(random);
    }        
}
arrPetsCardPages.push(arr);
}
function createPaginationAmountPages(){
for(let i=0; i<allNumberPage; i++){
    createRandomCards();
}
return arrPetsCardPages;
}
createPaginationAmountPages();



const prev = document.querySelector('.prev');
const start = document.querySelector('.start');
const current = document.querySelector('.current');
const next = document.querySelector('.next');
const end = document.querySelector('.end');

let currentPage = 0;

pageChanger(currentPage);

next.addEventListener('click', ()=>{
petsCardBox.innerHTML = '';
currentPage++;
start.disabled = false;
prev.disabled = false;
if(currentPage==arrPetsCardPages.length-1){
    next.disabled = true;
    end.disabled = true;
}
pageChanger(currentPage);
});

prev.addEventListener('click', ()=>{
petsCardBox.innerHTML = '';
currentPage--;
if(next.disabled){
    next.disabled = false;
    end.disabled = false;
}else if(currentPage==0){
    start.disabled = true;
    prev.disabled = true;
}
pageChanger(currentPage);
});

end.addEventListener('click', ()=>{
petsCardBox.innerHTML = '';
currentPage = arrPetsCardPages.length-1;
next.disabled = true;
end.disabled = true;
start.disabled = false;
prev.disabled = false;
pageChanger(currentPage);
});

start.addEventListener('click', ()=>{
petsCardBox.innerHTML = '';
start.disabled = true;
prev.disabled = true;
next.disabled = false;
end.disabled = false;
currentPage = 0;
pageChanger(currentPage);
});

console.log(arrPetsCardPages);

function pageChanger(num){
current.textContent = num+1;
arrPetsCardPages[num].forEach(item=>{
    createPetsCard(
        petsInfo[item].name, 
        petsInfo[item].img, 
        petsInfo[item].description,
        petsInfo[item].type,
        petsInfo[item].breed,
        petsInfo[item].age,
        petsInfo[item].inoculations,
        petsInfo[item].diseases,
        petsInfo[item].parasites
    );
});
}

