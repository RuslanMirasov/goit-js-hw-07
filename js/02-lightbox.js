import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');
const galleryMarkup = galleryItems.map(
  ({ preview, original, description }) =>
    ` 
   <li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a> 
   </li>
   `
);
galleryEl.insertAdjacentHTML('afterbegin', galleryMarkup.join(''));

galleryEl.addEventListener('click', galleryModalOpen);

function galleryModalOpen(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') return;
}

new SimpleLightbox('.gallery a', {
  captions: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
