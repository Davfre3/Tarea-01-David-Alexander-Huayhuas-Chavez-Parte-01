const toggles = document.querySelectorAll(".toggle");

toggles.forEach(toggle => {
  toggle.addEventListener("click", () => {
    const contentBox = toggle.nextElementSibling;

    contentBox.classList.toggle("open");

    toggles.forEach(otherToggle => {
      if (otherToggle !== toggle) {
        otherToggle.nextElementSibling.classList.remove("open");
      }
    });
  });
});
