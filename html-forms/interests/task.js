const checkboxes = Array.from(document.querySelectorAll(".interest__check"));

for (let checkboxItem of checkboxes) {
  checkboxItem.addEventListener("click", () => {
    const parent = checkboxItem.closest("li");
    //console.log(parent);
    const children = parent.querySelectorAll(
      "ul.interests_active input.interest__check"
    );
    //console.log(children);
    for (let child of children) {
      if (checkboxItem.checked) {
        child.checked = true;
      } else {
        child.checked = false;
      }
    }
  });
}
