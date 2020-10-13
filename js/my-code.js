import images from "./gallery-item.js";

const imageContainer = document.querySelector(".js-gallery");
const imageGallery = createGalleryImage(images);
imageContainer.insertAdjacentHTML("afterbegin", imageGallery);

function createGalleryImage(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

imageContainer.addEventListener("click", onClickToImage);
const lightBox = document.querySelector("lightbox");

const lightBoxImage = document.querySelector("lightbox__image");

function onClickToImage(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  lightBox.classList.add("is-open");
  lightBoxImage.src = e.target.dataset.source;
  lightBoxImage.alt = e.target.alt;
}
