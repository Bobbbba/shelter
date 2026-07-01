import data from './pets_json.js';
window.addEventListener('DOMContentLoaded', () => {

    const petsWrapper = document.querySelector('.card_container');
    const numberPage = document.querySelector('.button_paginator_active');
    const arrowStart = document.querySelector('.button_paginator_inactive_two');
    const arrowEnd = document.querySelector('.button_paginator_all');
    const arrowPrev = document.querySelector('.button_paginator_inactive');
    const arrowNext = document.querySelector('.button_paginator_next');

    let arrItems = [];
    let middleArr = [[]];
    let smallArr = [[]];
    let activePage = 1;

    setArrays(arrItems, middleArr, smallArr);
    initPagination();

    window.addEventListener('resize', () => {
        initPagination();
    })

    arrowEnd.addEventListener('click', () => {
        event.preventDefault()
        if (document.body.clientWidth > 768) {
            if (activePage != arrItems.length) {
                activePage = arrItems.length;
                petsWrapper.classList.add('disappearance');
                console.log("последний")
                petsWrapper.addEventListener('animationend', () => {
                    goToLastPage();
                }, { once: true });
            }

        } else if (document.body.clientWidth <= 768 && document.body.clientWidth > 638) {
            if (activePage != middleArr.length) {
                activePage = middleArr.length;
                petsWrapper.classList.add('disappearance');

                petsWrapper.addEventListener('animationend', () => {
                    goToLastPage();
                }, { once: true });
            }

        } else {
            if (activePage != smallArr.length) {
                activePage = smallArr.length;
                petsWrapper.classList.add('disappearance');

                petsWrapper.addEventListener('animationend', () => {
                    goToLastPage();
                }, { once: true });
            }
        }
    });

    arrowStart.addEventListener('click', () => {
        event.preventDefault()

        if (activePage != 1) {

            
            petsWrapper.classList.add('disappearance');

            petsWrapper.addEventListener('animationend', () => {
                activePage = 1;
                numberPage.textContent = activePage;
                initPagination();

                arrowEnd.classList.remove('arrow-inactive');
                arrowNext.classList.remove('arrow-inactive');
                arrowPrev.classList.add('arrow-inactive');
                arrowStart.classList.add('arrow-inactive');

                petsWrapper.classList.remove('disappearance');
            }, { once: true });
        }
    });

    arrowNext.addEventListener('click', () => {
        let arr = [];
         
        if (document.body.clientWidth > 768) {
            arr = arrItems;
        } else if (document.body.clientWidth <= 768 && document.body.clientWidth > 638) {
            arr = middleArr;
        } else {
            arr = smallArr;
        }
        
        if (activePage < arr.length) {
            petsWrapper.classList.add('disappearance');

            petsWrapper.addEventListener('animationend', () => {

                activePage++;
                numberPage.textContent = activePage;
                initPagination();

                if (activePage == 2) {
                    arrowStart.classList.remove('arrow-inactive');
                    arrowPrev.classList.remove('arrow-inactive');
                }

                if (activePage == arr.length) {
                    arrowNext.classList.add('arrow-inactive');
                    arrowEnd.classList.add('arrow-inactive');
                }
                petsWrapper.classList.remove('disappearance');
            }, { once: true })
        }
    });

    arrowPrev.addEventListener('click', () => {
        event.preventDefault();
        let arr = [];

        if (document.body.clientWidth > 768) {
            arr = arrItems;
        } else if (document.body.clientWidth <= 768 && document.body.clientWidth > 638) {
            arr = middleArr;
        } else {
            arr = smallArr;
        }

        if (activePage > 1) {
            petsWrapper.classList.add('disappearance');
            petsWrapper.addEventListener('animationend', () => {
                activePage--;
                numberPage.textContent = activePage;
                initPagination();

                if (activePage == arr.length - 1) {
                    arrowEnd.classList.remove('arrow-inactive');
                    arrowNext.classList.remove('arrow-inactive');
                }

                if (activePage == 1) {
                    arrowPrev.classList.add('arrow-inactive');
                    arrowStart.classList.add('arrow-inactive');
                }
                petsWrapper.classList.remove('disappearance');
            }, { once: true })
        }
    });

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

    function setPagination(idOfElement) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <div class="card_img">
                  <img src="assets/${data[idOfElement].img}" alt="woody">
                </div>
                <h3>${data[idOfElement].name}</h3>
                <div class="slider_button">Learn more</div>
                `
        // <img class="item-img" src="../images/pets/${data[idOfElement].img}" alt="woody">
        // <p class="heading pets-heading">${data[idOfElement].name}</p>
        // <form class="our-friends-form" action="#">
        //     <button class="button our-friend-button">Learn more</button>
        // </form>
    
        petsWrapper.append(card);
    }

    function initPagination() {
        petsWrapper.innerHTML = '';

        if (document.body.clientWidth > 768) {
            if (activePage >= arrItems.length) {
                activePage = arrItems.length;
                numberPage.textContent = activePage;
                arrowEnd.classList.add('arrow-inactive');
                arrowNext.classList.add('arrow-inactive');
            } else {
                arrowEnd.classList.remove('arrow-inactive');
                arrowNext.classList.remove('arrow-inactive');
            }

            for (let i = 0; i < 8; i++) {
                setPagination(arrItems[activePage - 1][i]);
            }
        } else if (document.body.clientWidth <= 768 && document.body.clientWidth > 638) {
            if (activePage >= middleArr.length) {
                activePage = middleArr.length;
                numberPage.textContent = activePage;
                arrowEnd.classList.add('arrow-inactive');
                arrowNext.classList.add('arrow-inactive');
            } else {
                arrowEnd.classList.remove('arrow-inactive');
                arrowNext.classList.remove('arrow-inactive');
            }

            for (let i = 0; i < 6; i++) {
                setPagination(middleArr[activePage - 1][i]);
            }
        } else {
            if (activePage < smallArr.length) {
                arrowEnd.classList.remove('arrow-inactive');
                arrowNext.classList.remove('arrow-inactive');
            }
            for (let i = 0; i < 3; i++) {
                setPagination(smallArr[activePage - 1][i]);
            }
        }
    }


    function setArrays(array, arrayMiddle, arraySmall) {
        for (let i = 0; i < 6; i++) {
            array[i] = [];
            for (let j = 0; j < 8; j++) {
                array[i][j] = setRandomId(array[i], 8);
            }
        }

        let x = 0, z = 0;

        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {

                if (!arrayMiddle[x].includes(array[i][j])) {
                    arrayMiddle[x][z++] = array[i][j];
                } else {
                    let swapElem = array[i][j];
                    for (let t = j + 1; t < array[i].length; t++) {
                        if (!arrayMiddle[x].includes(arrItems[i][t])) {
                            array[i][j] = array[i][t];
                            array[i][t] = swapElem;

                            arrayMiddle[x][z++] = array[i][j];
                            break;
                        }
                    }
                }

                if (z == 6) {
                    x++;
                    z = 0;
                    arrayMiddle[x] = new Array();
                }
            }
        }
        arrayMiddle.pop();

        x = 0, z = 0;

        for (let i = 0; i < arrayMiddle.length; i++) {
            for (let j = 0; j < arrayMiddle[i].length; j++) {
                arraySmall[x][z++] = arrayMiddle[i][j];
                if (z == 3) {
                    x++;
                    z = 0;
                    arraySmall[x] = new Array();
                }
            }
        }
        arraySmall.pop();
    }

    function goToLastPage() {
        if (document.body.clientWidth > 768) {
            activePage = arrItems.length;

        } else if (document.body.clientWidth <= 768 && document.body.clientWidth > 638) {
            activePage = middleArr.length;

        } else {
            activePage = smallArr.length;
        }

        numberPage.textContent = activePage;
        initPagination();

        arrowEnd.classList.add('arrow-inactive');
        arrowNext.classList.add('arrow-inactive');
        arrowPrev.classList.remove('arrow-inactive');
        arrowStart.classList.remove('arrow-inactive');
        petsWrapper.classList.remove('disappearance');
    }

})