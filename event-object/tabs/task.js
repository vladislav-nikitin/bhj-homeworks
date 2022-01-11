const tabs = Array.from(document.querySelectorAll(".tab"));
const tabsContent = Array.from(document.querySelectorAll(".tab__content"));

tabs.forEach((tab) => {
  tab.addEventListener("click", checkContent);
});

function checkContent(event) {
  let index = tabs.findIndex((tab) => tab.classList.contains("tab_active"));
  tabs[index].classList.remove(`tab_active`);
  tabsContent[index].classList.remove(`tab__content_active`);
  event.target.classList.toggle("tab_active");
  index = tabs.findIndex((tab) => tab.classList.contains("tab_active"));
  tabsContent[index].classList.toggle("tab__content_active");
}
