import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');
const galleryMarkup = galleryItems.map(
  ({ preview, original, description }) =>
    ` 
   <li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
         />
      </a>
   </li>
   `
);
galleryEl.insertAdjacentHTML('afterbegin', galleryMarkup.join(''));

galleryEl.addEventListener('click', galleryModalOpen);

function galleryModalOpen(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') return;
  const modal = basicLightbox.create(`<img width="1400" height="900" src="${e.target.dataset.source}">`);
  modal.show();
  galleryEl.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      modal.close();
    }
  });
}
