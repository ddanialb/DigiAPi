function Search() {
  let searchbar = document.querySelector(".console");
  let history = document.querySelector(".history");
  let category = document.querySelector(".category");
  let close = document.querySelector(".bg-close");

  searchbar.addEventListener("click", function (e) {
    e.stopPropagation();
    history.classList.add("!flex");
    close.classList.add("!block");
  });


  category.addEventListener("click", function () {
    history.classList.remove("!flex");
    close.classList.remove("!block");
  });


  close.addEventListener("click", function () {
    close.classList.remove("!block");
    history.classList.remove("!flex");
  });


  document.addEventListener("click", function (e) {
    const isClickInsideHistory = history.contains(e.target);
    const isClickInsideSearchbar = searchbar.contains(e.target);

    if (!isClickInsideHistory && !isClickInsideSearchbar) {
      history.classList.remove("!flex");
      close.classList.remove("!block");
    }
  });


  history.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}
export default Search;
