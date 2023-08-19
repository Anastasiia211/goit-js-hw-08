// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryMarcup = createGalleryItems(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarcup);


function createGalleryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image"
       src="${preview}"
       alt="${description}" />
   </a>
</li>`
    }).join("");
}

const instance = new SimpleLightbox('.gallery a', { captionData: "alt", captionDelay: 250 });