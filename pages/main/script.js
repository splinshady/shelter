import { Modal } from "./modal.js";

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








const data = [
    {
        "name": "Jennifer",
        "img": "../../assets/images/pets-jennifer.png",
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
        "img": "../../assets/images/sof.png",
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
        "img": "../../assets/images/pets-woody.png",
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
        "img": "../../assets/images/pets-katrine.png",
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

const generateArrArticles = (data) => {
    let articleArr = [];
    data.forEach(article => {
        articleArr.push(new Article(article))
    });
    return articleArr;
}



class Article {
    constructor({ name, img, breed, ...rest }) {
        this.name = name;
        this.img = img;
        this.breed = breed;
    }

    generateArticle() {
        let template = '';
        let article = document.createElement('article');
        article.className = 'slider-card';

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
        console.log(event.target);
        let modal = new Modal();
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
