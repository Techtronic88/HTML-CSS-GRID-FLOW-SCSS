const tabItems = document.querySelector(".tab-item");
const tabContentItem = document.querySelector(".tab-content-item");

function selectItem(e) {}

tabItems.forEach(item => item.addEventListener("click", selectItem));
