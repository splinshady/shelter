import {data} from "../main/data.js";
import {Modal} from "../main/modal.js";

const wrapper = document.querySelector('.pets-our-friends__slider');


wrapper.addEventListener('click', (event) => {
  let clickedCardId = event.target.closest('.slider-card').getAttribute('data-id');
  let dataCard = data.find(item => item.dataId == clickedCardId);
  console.log(clickedCardId)
  let modal = new Modal(dataCard);
  modal.buildModal();
})