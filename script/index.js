const galleryItem = document.getElementsByClassName('gallery-item');
const popupContainer = document.createElement('div');
const popupContent = document.createElement('div');
const popupImg = document.createElement('img');
const popupPrev = document.createElement('div');
const popupNext = document.createElement('div');

popupContainer.classList.add('popup');
popupContent.classList.add('popup-content');
popupPrev.classList.add('popup-prev');
popupNext.classList.add('popup-next');

popupContainer.appendChild(popupContent);
popupContent.appendChild(popupImg);
popupContent.appendChild(popupPrev);
popupContent.appendChild(popupNext);
document.body.appendChild(popupContainer);

let index = 1;

function showpopup(n) {
  if (n > galleryItem.length) {
    index = 1;
  } else if (n < 1) {
    index = galleryItem.length;
  }
  let imageLocation = galleryItem[index - 1].children[0].getAttribute('src');
  popupImg.setAttribute('src', imageLocation);
}

function currentImage() {
  popupContainer.style.display = 'flex';

  let imageIndex = parseInt(this.getAttribute('data-index'));
  showpopup((index = imageIndex));
}
for (let i = 0; i < galleryItem.length; i++) {
  galleryItem[i].addEventListener('click', currentImage);
}

function slideImage(n) {
  showpopup((index += n));
}
function prevImage() {
  slideImage(-1);
}
function nextImage() {
  slideImage(1);
}
popupPrev.addEventListener('click', prevImage);
popupNext.addEventListener('click', nextImage);

function closepopup(event) {
  if (this === event.target) {
    popupContainer.style.display = 'none';
  }
}
popupContainer.addEventListener('click', closepopup);

let menu = document.querySelector('.burger-drop');
let menuBtn = document.querySelector('.burger-btn');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});

menu.addEventListener('click', function () {
  menuBtn.classList.remove('active');
  menu.classList.remove('active');
});
