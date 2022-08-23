
function addToCart(buyNowButton) {
    const protuctName = buyNowButton.parentNode.parentNode.children[0].innerText;
    const protucPriceElement = buyNowButton.parentNode.parentNode.children[2].children[0].innerText;
    const protuctPrice = parseInt(protucPriceElement);

    const totalProductsElement = document.getElementById("total-product");
    const totalProductString = totalProductsElement.innerText;
    const preTotalProducts = parseInt(totalProductString);

    const totalProducts = preTotalProducts + 1;

    totalProductsElement.innerText = totalProducts;

    const quantity = 1;

    const createElement = document.getElementById("added-product");
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${totalProducts}</td>
        <td>${protuctName}</td>
        <td>${quantity}</td>
        <td>${protuctPrice}</td>
    `

    createElement.appendChild(tr);

    const totalPriceElement = document.getElementById("total-price");
    const totalPriceString = totalPriceElement.innerText;
    const previousTotalPrice = parseInt(totalPriceString)

    const totalPrice = previousTotalPrice + protuctPrice;

    totalPriceElement.innerText = totalPrice;

}

