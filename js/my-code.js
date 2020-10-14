import images from "./gallery-item.js";

const imageContainer = document.querySelector(".js-gallery");
const imageGallery = createGalleryImage(images);
imageContainer.insertAdjacentHTML("afterbegin", imageGallery);
const lightBox = document.querySelector(".lightbox");

const lightBoxImage = document.querySelector(".lightbox__image");

let closeBtn = document.querySelector(".lightbox__button");
console.log(closeBtn);

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

function onClickToImage(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  lightBox.classList.add("is-open");
  lightBoxImage.src = e.target.dataset.source;
  lightBoxImage.alt = e.target.alt;
}

closeBtn.addEventListener("click", onCloseBtnClick);

function onCloseBtnClick(e) {
  if (e.target.nodeName === "IMG") {
    return;
  }
  lightBox.classList.remove("is-open");
  lightBoxImage.removeAttribute("src");
  lightBoxImage.removeAttribute("alt");
}
