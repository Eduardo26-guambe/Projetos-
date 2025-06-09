document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn-mais");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const bio = this.closest(".info");
      const fullBio = bio.querySelector(".info-g");
      const shortBio = bio.querySelector(".info-l");

      const isHidden = fullBio.style.display === "none";

      fullBio.style.display = isHidden ? "block" : "none";
      shortBio.style.display = isHidden ? "none" : "block";
      this.textContent = isHidden ? "Ver mais" : "Ver menos";
    });
  });
});