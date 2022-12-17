import {data} from "../main/data.js";
import {Modal} from "../main/modal.js";

const wrapper = document.querySelector('.pets-our-friends__slider');
const burger = document.querySelector('.burger');
const headerNavigation = document.querySelector('.header__navigation');
const navigation = document.querySelector('.navigation');


wrapper.addEventListener('click', (event) => {
  let clickedCardId = event.target.closest('.slider-card').getAttribute('data-id');
  let dataCard = data.find(item => item.dataId == clickedCardId);
  console.log(clickedCardId)
  let modal = new Modal(dataCard);
  modal.buildModal();
})

if (burger) {
  burger.addEventListener('click', (event) => {
    document.body.classList.toggle('_lock');
    burger.classList.toggle('burger_active');
    headerNavigation.classList.toggle('header__navigation_active');
    navigation.classList.toggle('navigation_active');
  })
}