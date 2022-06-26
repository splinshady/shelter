export class Modal {
  constructor ({name, dataId, img, type, breed, description, age, inoculations, diseases, parasites}) {
    this.modal = '';
    this.overlay = '';
    this.modalCloseBtn = '';
    this.modalContent = '';
    this.name = name;
    this.dataId = dataId;
    this.img = img;
    this.type = type;
    this.breed = breed;
    this.description = description;
    this.age = age;
    this.inoculations = inoculations;
    this.diseases = diseases;
    this.parasites = parasites;
  }

  buildModal() {
    this.overlay = document.createElement('div');
    this.overlay.classList.add('modal-wrapper');

    this.modal = document.createElement('div');
    this.modal.classList.add('modal');

    this.modalCloseBtn = document.createElement('div');
    this.modalCloseBtn.classList.add('modal__close-btn');

    this.modalContent = document.createElement('div');
    this.modalContent.classList.add('modal__decription-wrapper');

    let imgTemplate = `<img src="${this.img}" alt="${this.type} ${this.name}" class="modal__img">`;

    let template = '';
    if (this.name) {template += `<h3 class="modal__name">${this.name}</h3>`}
    if (this.type && this.breed) {template += `<h4 class="modal__breed">${this.type} - ${this.breed}</h4>`}
    if (this.description) {template += `<h5 class="modal__description">${this.description}</h5>`}
    if (this.age) {template += `<h5 class="modal__list">Age: ${this.age}</h5>`}
    if (this.inoculations) {
      template += `<h5 class="modal__list">Inoculations: ${this.unpackArray(this.inoculations)}</h5>`
    }
    if (this.diseases) {
      template += `<h5 class="modal__list">Diseases: ${this.unpackArray(this.diseases)}</h5>`
    }
    if (this.parasites) {
      template += `<h5 class="modal__list">Parasites: ${this.unpackArray(this.parasites)}</h5>`
    }


    console.log(this.img);

    this.overlay.addEventListener('click', this.closeModal);

    this.modalContent.innerHTML = template;
    this.modal.innerHTML = imgTemplate;
    this.modal.append(this.modalContent);
    this.overlay.append(this.modal);
    this.overlay.append(this.modalCloseBtn);
    document.body.append(this.overlay);
  }

  unpackArray(arr) {
    let unpackedStr = '';
    arr.forEach((item, i, arr) => {
      if (item === 'none') return unpackedStr += 'No';
      if (arr.length - 1 == i) {
        unpackedStr += item;
      } else {
        unpackedStr += `${item}, `;
      }
    });
    return unpackedStr;
  }

  closeModal(event) {
    if (event.target.classList.contains('modal-wrapper') || event.target.classList.contains('modal__close-btn')) {
      document.querySelector('.modal-wrapper').remove();
    }
  }
}