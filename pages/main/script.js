import { Modal } from "./modal.js";
import { data } from "./data.js";

const burger = document.querySelector('.burger');
const headerNavigation = document.querySelector('.header__navigation');
const navigation = document.querySelector('.navigation');
const logo = document.querySelector('.header__logo');

if (burger) {
    burger.addEventListener('click', (event) => {
        document.body.classList.toggle('_lock');
        burger.classList.toggle('burger_active');
        headerNavigation.classList.toggle('header__navigation_active');
        navigation.classList.toggle('navigation_active');
        logo.classList.toggle('header__logo_burger');
    })
}

if (headerNavigation) {
    headerNavigation.addEventListener('click', (event) => {
        document.body.classList.remove('_lock');
        burger.classList.remove('burger_active');
        headerNavigation.classList.remove('header__navigation_active');
        navigation.classList.remove('navigation_active');
        logo.classList.remove('header__logo_burger');
    })
}

const navigationLinks = document.querySelectorAll('.navigation__link');
const navigationLinksPets = document.querySelectorAll('.pets-navigation__link');

navigationLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        if (burger.classList.contains('burger_active')) {
            document.body.classList.remove('_lock');
            burger.classList.remove('burger_active');
            headerNavigation.classList.remove('header__navigation_active');
            navigation.classList.remove('navigation_active');
            logo.classList.remove('header__logo_burger');
        }
    })
})

navigationLinksPets.forEach(link => {
    link.addEventListener('click', (event) => {
        if (burger.classList.contains('burger_active')) {
            document.body.classList.remove('_lock');
            burger.classList.remove('burger_active');
            headerNavigation.classList.remove('header__navigation_active');
            navigation.classList.remove('navigation_active');
            logo.classList.remove('header__logo_burger');
        }
    })
})



const generateArrArticles = (data) => {
    let articleArr = [];
    data.forEach(article => {
        articleArr.push(new Article(article))
    });
    return articleArr;
}



class Article {
    constructor({ name, img, breed, dataId, type, ...rest }) {
        this.name = name;
        this.img = img;
        this.breed = breed;
        this.dataId = dataId;
    }

    generateArticle() {
        let template = '';
        let article = document.createElement('article');
        article.className = 'slider-card';
        article.setAttribute('data-id', `${this.dataId}`);

        this.img &&
            (template += `<img src=${this.img} alt=${this.breed} class="slider-card__img">`);

        this.name &&
            (template += `<span class="slider-card__name">${this.name}</span>`);

        template += `<button class="slider-card__button">Learn more</button>`;

        article.innerHTML = template;

        return article;
    }
}

const arrOfArticleTemplate = generateArrArticles(data);
const wrapper = document.querySelector('.our-friends__slider');

const renderArticle = () => {
    wrapper.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        wrapper.append(arrOfArticleTemplate[i].generateArticle());
    }
    wrapper.addEventListener('click', (event) => {
        let clickedCardId = event.target.closest('.slider-card').getAttribute('data-id');
        let dataCard = data.find(item => item.dataId == clickedCardId);
        
        let modal = new Modal(dataCard);
        modal.buildModal();
    })
}

if (data) {
    renderArticle();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const slideLeft = document.querySelector('.slide-left');
const slideRight = document.querySelector('.slide-right');

let prevRandom = [1, 2, 3];
slideLeft.addEventListener('click', () => {
    let promise = new Promise(function (resolve, reject) {
        wrapper.className = 'our-friends__slider translate-left';
        setTimeout(() => resolve(), 500);
    });
    promise.then(() => {
        wrapper.innerHTML = '';
        let nextRandom = [];
        for (let i = 0; i < 3; i++) {
            let randomNum = getRandomInt(0, arrOfArticleTemplate.length);
            while (nextRandom.includes(randomNum) || prevRandom.includes(randomNum)) {
                randomNum = getRandomInt(0, arrOfArticleTemplate.length);
            }
            nextRandom.push(randomNum)
        }
        for (let i = 0; i < nextRandom.length; i++) {
            wrapper.append(arrOfArticleTemplate[nextRandom[i]].generateArticle());
        }
        prevRandom = nextRandom;
    });
    promise.then(() => {
        wrapper.className = 'our-friends__slider translate-left-back';
    });
})

slideRight.addEventListener('click', () => {
    let promise = new Promise(function (resolve, reject) {
        wrapper.className = 'our-friends__slider translate-right-back';
        setTimeout(() => resolve(), 500);
    });
    promise.then(() => {
        wrapper.innerHTML = '';
        let nextRandom = [];
        for (let i = 0; i < 3; i++) {
            let randomNum = getRandomInt(0, arrOfArticleTemplate.length);
            while (nextRandom.includes(randomNum) || prevRandom.includes(randomNum)) {
                randomNum = getRandomInt(0, arrOfArticleTemplate.length);
            }
            nextRandom.push(randomNum)
        }
        for (let i = 0; i < nextRandom.length; i++) {
            wrapper.append(arrOfArticleTemplate[nextRandom[i]].generateArticle());
        }
        prevRandom = nextRandom;
        console.log('ddd' + nextRandom)
    });
    promise.then(() => {
        wrapper.className = 'our-friends__slider translate-right';
    });
})
