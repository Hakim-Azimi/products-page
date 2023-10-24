const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter");

searchInput.addEventListener("keyup", (event) => {
  const searchValue = event.target.value.toLowerCase().trim();

  products.forEach((product) => {
    const productName = product.children[1].innerText.toLowerCase();
    product.style.display = productName.includes(searchValue) ? "block" : "none";
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const filter = event.target.dataset.filter;
    
    buttons.forEach((btn) => btn.classList.toggle("selected", btn === button));
    
    products.forEach((product) => {
      const category = product.dataset.category;
      product.style.display = filter === "all" || category === filter ? "block" : "none";
    });
  });
});
