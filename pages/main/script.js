import {Modal} from "./modal.js";
import {data} from "./data.js";

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


class Article {
  constructor({name, img, breed, dataId, type, ...rest}) {
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

const generateArrArticles = (data) => {
  let articleArr = [];
  data.forEach(article => {
    articleArr.push(new Article(article))
  });
  return articleArr;
}

const arrOfArticleTemplate = generateArrArticles(data);
const wrapperOurFriends = document.querySelector('.our-friends__slide-container');

const renderCarousel = () => {
  wrapperOurFriends.innerHTML = '';

  let carousel = document.createElement('div');
  carousel.className = 'our-friends__courusel';

  let count = 0;
  for (let i = 0; i < 3; i++) {
    let slide = document.createElement('div');
    slide.className = 'our-friends__slider';
    slide.id = `carousel-${i}`
    for (let j = 0; j < 3; j++) {
      slide.append(arrOfArticleTemplate[count].generateArticle());
      count++;
    }
    carousel.append(slide);
  }

  wrapperOurFriends.append(carousel);

  wrapperOurFriends.addEventListener('click', (event) => {
    let clickedCardId = event.target.closest('.slider-card').getAttribute('data-id');
    let dataCard = data.find(item => item.dataId == clickedCardId);

    let modal = new Modal(dataCard);
    modal.buildModal();
  })
}

if (data) {
  renderCarousel();
}

// add carousel logic

const slideLeftBtn = document.querySelector('.slide-left');
const slideRightBtn = document.querySelector('.slide-right');
const carousel = document.querySelector('.our-friends__courusel');
let activeSlide = document.querySelector('#carousel-1');
let leftSlide = document.querySelector('#carousel-0');
let rightSlide = document.querySelector('#carousel-2');


const slideLeft = () => {
  carousel.classList.add('carousel-right');
  slideLeftBtn.removeEventListener('click', slideLeft);
  slideRightBtn.removeEventListener('click', slideRight);
}

const slideRight = () => {
  carousel.classList.add('carousel-left');
  slideLeftBtn.removeEventListener('click', slideLeft);
  slideRightBtn.removeEventListener('click', slideRight);
}

slideLeftBtn.addEventListener('click', slideLeft);
slideRightBtn.addEventListener('click', slideRight);

carousel.addEventListener('animationend', (animationEvent) => {
  switch (animationEvent.animationName) {
    case 'move-left': {
      let slide = activeSlide.innerHTML;
      activeSlide.innerHTML = rightSlide.innerHTML;
      rightSlide.innerHTML = leftSlide.innerHTML;
      leftSlide.innerHTML = slide;
      carousel.classList.remove('carousel-left');
      break;
    }
    case 'move-right': {
      let slide = activeSlide.innerHTML;
      activeSlide.innerHTML = leftSlide.innerHTML;
      leftSlide.innerHTML = rightSlide.innerHTML;
      rightSlide.innerHTML = slide;
      carousel.classList.remove('carousel-right');
      break;
    }
  }

  slideLeftBtn.addEventListener('click', slideLeft);
  slideRightBtn.addEventListener('click', slideRight);
});
