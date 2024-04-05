var product = document.querySelectorAll(".product");
var productContainer = document.querySelector("#productContainer");
var add = document.querySelector("#showPrice");
var result = document.querySelector("#productPrice");
var totalPrice = 0;

product.forEach(function (item) {
  item.onclick = function () {
    totalPrice += +item.getAttribute("price");

    productContainer.innerHTML +=
      "<div>" +
      item.getAttribute("name") +
      " : " +
      item.getAttribute("price") +
      "</div>";

    if (productContainer.innerHTML != "") {
      add.style.display = "block";
    }
    add.onclick = function () {
      result.innerHTML = totalPrice;
    };
  };
});
