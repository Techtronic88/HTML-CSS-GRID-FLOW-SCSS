// BECAREFUL: using document.querySelecTor in this case WILL NOT give you a nodeList to iterate over
// This is why we need to use document.querySelectorAll.
const tabItems = document.querySelectorAll(".tab-item");
const tabContentItem = document.querySelector(".tab-content-item");

// Adding on Red Bottom Border to each tabs we click on
function selectItem(e) {
  removeBorders();
  this.classList.add("tab-border");
}

// Remove borders from tabs after each items clicked on
// NOTE: function declaration is hoisted to the top.
function removeBorders(e) {
  tabItems.forEach(item => {
    item.classList.remove("tab-border");
  });
}

tabItems.forEach(item => {
  item.addEventListener("click", selectItem);
});
