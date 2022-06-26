export class Modal {
  constructor () {
    this.modal = '';
    this.overlay = '';
    this.modalCloseBtn = '';
  }

  buildModal() {
    this.overlay = document.createElement('div');
    this.overlay.classList.add('modal-wrapper');

    this.modal = document.createElement('div');
    this.modal.classList.add('modal');

    this.modalCloseBtn = document.createElement('div');
    this.modalCloseBtn.classList.add('modal__close-btn');

    this.overlay.addEventListener('click', this.closeModal);

    this.overlay.append(this.modal);
    this.overlay.append(this.modalCloseBtn);
    document.body.append(this.overlay);
  }

  closeModal(event) {
    console.log(event.target);
    if (event.target.classList.contains('modal-wrapper') || event.target.classList.contains('modal__close-btn')) {
      document.querySelector('.modal-wrapper').remove();
    }
  }
}