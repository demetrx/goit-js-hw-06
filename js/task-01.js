const mainList = document.querySelector("#categories");
console.log("Number of categories:", mainList.children.length);

[...mainList.children].forEach((e) => {
  const categoryName = e.firstElementChild.textContent;
  const NumOfEl = e.lastElementChild.children.length;
  console.log("Category:", categoryName);
  console.log("Elements:", NumOfEl);
});
