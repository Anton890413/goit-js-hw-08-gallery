
import gallery from './gallery-items.js';
console.log(gallery);
const galleryString = gallery.reduce((acc, { preview, original, description }) => {
    acc += `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}"
                    data-source="${original}" alt="${description}" />
            </a>
        </li>`;
    return acc;
}, "")
const galleryPict = document.querySelector('.js-gallery');
galleryPict.insertAdjacentHTML('beforeend', galleryString);
galleryPict.addEventListener('click', clickOnGallery);
const lightboxEl = document.querySelector('.lightbox');
const lightboxImageEl = document.querySelector('.lightbox__image');

function clickOnGallery(evt) {
    evt.preventDefault()
     if (evt.target.nodeName != 'IMG')
     { return; }
    lightboxEl.classList.add('is-open');
    lightboxImageEl.src = evt.target.dataset.source;
    lightboxImageEl.alt = evt.target.alt;
    return evt.target.dataset.source;
};

const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');
closeModalBtn.addEventListener('click', clickOnBtn);
function clickOnBtn(event) {
    if (event.target === lightboxEl || event.target === closeModalBtn) {
     lightboxEl.classList.remove('is-open');
  }
}
lightboxImageEl.src = "";



