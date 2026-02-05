const photos = document.querySelectorAll(".photo");

photos.forEach(photo => {
  photo.addEventListener("click", () => {
    // убираем увеличение у всех
    photos.forEach(p => p.classList.remove("active"));
    // увеличиваем только нажатую
    photo.classList.add("active");
  });
});
