import data from './pets_json.js';



const cardContainer = document.querySelector('.card_container'); //slider
let arrRandomId = [];
const arrowLeft = document.querySelector('.btn-left'); 
const arrowRight = document.querySelector('.btn-right'); 
let windowWidth = 0;

let prevElements = [];
let currentElements = [];
let nextElements = [];

initSlider();


window.addEventListener('resize', () => {
    initSlider();
});

arrowLeft.addEventListener('click', (e) => {
    moveSlider(arrowRight);
   
});

arrowRight.addEventListener('click', (e) => {
    moveSlider(arrowLeft);
    
});

cardContainer.addEventListener('animationend', () => {
    changeItems();
})

function moveSlider(card) {
    if (document.body.clientWidth > 768) {
        if (card.classList.contains('btn-right')) {
            cardContainer.classList.add('move-to-right');
            
            arrRandomId = ['', '', '', prevElements[0], prevElements[1], prevElements[2], currentElements[0], currentElements[1], currentElements[2]];
            
            for (let i = 0; i < 2; i++) {
                arrRandomId[i] = setRandomId(arrRandomId, 8);
            }
            arrRandomId[2] = arrRandomId[arrRandomId.length - 1];

           

            prevElements = [arrRandomId[0], arrRandomId[1], arrRandomId[2]];
            currentElements = [arrRandomId[3], arrRandomId[4], arrRandomId[5]];
            nextElements = [arrRandomId[6], arrRandomId[7], arrRandomId[8]];
        } else if (card.classList.contains('btn-left')) {
            cardContainer.classList.add('move-to-left');
             
            arrRandomId = [currentElements[0], currentElements[1], currentElements[2], nextElements[0], nextElements[1], nextElements[2]];
           
            for (let i = 6; i < 8; i++) {
                arrRandomId[i] = setRandomId(arrRandomId, 8);
            }
            arrRandomId[8] = arrRandomId[0];

            prevElements = [arrRandomId[0], arrRandomId[1], arrRandomId[2]];
            currentElements = [arrRandomId[3], arrRandomId[4], arrRandomId[5]];
            nextElements = [arrRandomId[6], arrRandomId[7], arrRandomId[8]];
        }
         
    } else if (document.body.clientWidth > 638) {
        if (card.classList.contains('btn-right')) {
            cardContainer.classList.add('move-to-right');

            arrRandomId = ['', '', prevElements[0], prevElements[1], currentElements[0], currentElements[1]];

            for (let i = 0; i < 2; i++) {
                arrRandomId[i] = setRandomId(arrRandomId, 8);
            }
            prevElements = [arrRandomId[0], arrRandomId[1]];
            currentElements = [arrRandomId[2], arrRandomId[3]];
            nextElements = [arrRandomId[4], arrRandomId[5]];
        } else if (card.classList.contains('btn-left')) {
            cardContainer.classList.add('move-to-left');

            arrRandomId = [currentElements[0], currentElements[1], nextElements[0], nextElements[1]];

            for (let i = 4; i < 6; i++) {
                arrRandomId[i] = setRandomId(arrRandomId, 8);
            }
            prevElements = [arrRandomId[0], arrRandomId[1]];
            currentElements = [arrRandomId[2], arrRandomId[3]];
            nextElements = [arrRandomId[4], arrRandomId[5]];
        }
    } else {
        if (card.classList.contains('btn-right')) {
            cardContainer.classList.add('move-to-right');

            arrRandomId = ['', prevElements[0], currentElements[0]];

            arrRandomId[0] = setRandomId(arrRandomId, 8);

            prevElements = [arrRandomId[0]];
            currentElements = [arrRandomId[1]];
            nextElements = [arrRandomId[2]];
        } else if (card.classList.contains('btn-left')) {
            cardContainer.classList.add('move-to-left');

            arrRandomId = [currentElements[0], nextElements[0]];

            arrRandomId[2] = setRandomId(arrRandomId, 8);

            prevElements = [arrRandomId[0]];
            currentElements = [arrRandomId[1]];
            nextElements = [arrRandomId[2]];
        }
    }
   
}

function changeItems() {
    if (document.body.clientWidth > 768) {
        if (cardContainer.classList.contains('move-to-left')) {
            cardContainer.classList.remove('move-to-left');
        

            cardContainer.innerHTML = '';

            for (let i = 0; i < 9; i++) {
                addElement(arrRandomId[i]);
            }
            arrRandomId = [];
        }

        if (cardContainer.classList.contains('move-to-right')) {
            cardContainer.classList.remove('move-to-right');

            cardContainer.innerHTML = '';

            for (let i = 0; i < 9; i++) {
                addElement(arrRandomId[i]);
            }
            arrRandomId = [];
        }
    } else if (document.body.clientWidth > 638) {
        if (cardContainer.classList.contains('move-to-left')) {
            cardContainer.classList.remove('move-to-left');

            cardContainer.innerHTML = '';

            for (let i = 0; i < 6; i++) {
                addElement(arrRandomId[i]);
            }
            arrRandomId = [];
        }

        if (cardContainer.classList.contains('move-to-right')) {
            cardContainer.classList.remove('move-to-right');

            cardContainer.innerHTML = '';

            for (let i = 0; i < 6; i++) {
                addElement(arrRandomId[i]);
            }
            arrRandomId = [];
        }
    } else {
        if (cardContainer.classList.contains('move-to-left')) {
            cardContainer.classList.remove('move-to-left');

            cardContainer.innerHTML = '';

            for (let i = 0; i < 3; i++) {
                addElement(arrRandomId[i]);
            }
            arrRandomId = [];
        }

        if (cardContainer.classList.contains('move-to-right')) {
            cardContainer.classList.remove('move-to-right');

            cardContainer.innerHTML = '';

            for (let i = 0; i < 3; i++) {
                addElement(arrRandomId[i]);
            }
            arrRandomId = [];
        }
    }
}

function setRandomId(array, maxElement) {
    let randomId;
    while (true) {
        randomId = Math.floor(Math.random() * maxElement);
        if (!array.includes(randomId)) {
            break;
        }
    }
    return randomId;
}

function addElement(idOfElement) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
   
                <div class="card_img">
                  <img src="assets/${data[idOfElement].img}" alt="katrine">
                </div>
                <h4 class="pets_name">${data[idOfElement].name}</h4>
                <div class="slider_button">Learn more</div>
                
                `
    
    
    cardContainer.append(card);
}

function initSlider() {

    if ((document.body.clientWidth > 768) && (windowWidth <= 768)) {
        windowWidth = document.body.clientWidth;
        cardContainer.innerHTML = '';
        for (let i = 0; i < 8; i++) {
            arrRandomId[i] = setRandomId(arrRandomId, 8);
        }
        arrRandomId[8] = arrRandomId[0];

        prevElements = [arrRandomId[0], arrRandomId[1], arrRandomId[2]];
        currentElements = [arrRandomId[3], arrRandomId[4], arrRandomId[5]];
        nextElements = [arrRandomId[6], arrRandomId[7], arrRandomId[8]];


        for (let i = 0; i < 9; i++) {
            addElement(arrRandomId[i]);
        }

        arrRandomId = [];

    } else if ((document.body.clientWidth > 638 && document.body.clientWidth <= 768) && (windowWidth > 768 || windowWidth < 639)) {
        cardContainer.innerHTML = '';
        windowWidth = document.body.clientWidth;
        for (let i = 0; i < 6; i++) {
            arrRandomId[i] = setRandomId(arrRandomId, 8);
        }

        prevElements = [arrRandomId[0], arrRandomId[1]];
        currentElements = [arrRandomId[2], arrRandomId[3]];
        nextElements = [arrRandomId[4], arrRandomId[5]];


        for (let i = 0; i < 6; i++) {
            addElement(arrRandomId[i]);
        }

        arrRandomId = [];
    } else if ((document.body.clientWidth <= 638 && document.body.clientWidth >= 320) && (windowWidth > 638 || windowWidth < 320)) {
        windowWidth = document.body.clientWidth;
        cardContainer.innerHTML = '';
        for (let i = 0; i < 3; i++) {
            arrRandomId[i] = setRandomId(arrRandomId, 8);
        }

        prevElements = [arrRandomId[0]];
        currentElements = [arrRandomId[1]];
        nextElements = [arrRandomId[2]];


        for (let i = 0; i < 3; i++) {
            addElement(arrRandomId[i]);
        }

        arrRandomId = [];
    }
}
