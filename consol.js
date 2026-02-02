const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg"
];

let index = 0;
const slide = document.getElementById("slide");

document.getElementById("next").onclick = () => {
  index++;
  if (index === images.length) {
    index = 0;
  }
  slide.src = images[index];
};

document.getElementById("prev").onclick = () => {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  slide.src = images[index];
};
