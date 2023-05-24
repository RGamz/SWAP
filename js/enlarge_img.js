
const img_selectors = document.querySelectorAll(".enlargable");
const img_selector = null;


img_selectors.forEach((img_selector) => {
  img_selector.addEventListener('click', () => {
    if (img_selector.classList.contains('enlarge')) {
      img_selector.classList.remove('enlarge');
    } else {
      img_selector.classList.add('enlarge');
    }
  });
});
