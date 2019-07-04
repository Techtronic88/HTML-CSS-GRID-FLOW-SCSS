// BECAREFUL: using document.querySelecTor in this case WILL NOT give you a nodeList to iterate over
// This is why we need to use document.querySelectorAll.
const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Adding on Red Bottom Border to each tabs we click on
function selectItem(e) {
  removeBorders();
  removeShow();
  this.classList.add("tab-border");

  // Grab all contained elements inside of the tabs
  // Add it into the existing DOM dynamiclly
  const gettingItems = document.querySelector(`#${this.id}-content`);
  gettingItems.classList.add("show");
  console.log(this.id);
}

// Remove borders from tabs after each items clicked on
// NOTE: function declaration is hoisted to the top.
function removeBorders(e) {
  tabItems.forEach(item => {
    item.classList.remove("tab-border");
  });
}

// We have to remove any existing elements from the DOM
function removeShow() {
  tabContentItems.forEach(item => {
    item.classList.remove("show");
  });
}

tabItems.forEach(item => {
  item.addEventListener("click", selectItem);
});
