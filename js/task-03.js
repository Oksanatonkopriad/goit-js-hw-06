const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector(`.gallery`);
const img = images
  .map((image) => {
    return `<li>
    <img src="${image.url}" alt="${image.alt}" class = "img" width = "200" height = "200"></img>
  </li>`;
  })
  .join(``);

const makeGalleryEl = (galleryEl.style.sccText += `display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
list-style: none;
margin: 0;
`);

galleryEl.insertAdjacentHTML("beforeend", img);
