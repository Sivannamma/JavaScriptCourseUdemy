'use strict';

// expression functions has to be defined on top
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnOpenModel = document.querySelectorAll('.show-modal');

console.log(btnOpenModel);

for (let i = 0; i < btnOpenModel.length; i++)
  btnOpenModel[i].addEventListener('click', openModal);
// note : if we do remove, the whole css and html of them will be removed, and add will add them back on
// when we do remove, in the css the line "Display :none" is removed, therefore it will be presented
// and same for the overlay as well.
btnCloseModel.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// how to listen to keyPressing events,
// it listens around all the page for this element that was pressed

// the spesific key that was pressed is saved in the evenListiner, javascript saves data about the key that was saved. in order to recieve the data, we need to spesify in the function a paramet in order to recieve the data from js.
document.addEventListener('keydown', function (e) {
  // object from js that stores all the information
  console.log(e);
  // spesific information
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // if escpe was pressed, we want to check if the modal is open. if it is open we want to close it && if it is open

    // calling the function in order to close it
    closeModal();
  }
});
