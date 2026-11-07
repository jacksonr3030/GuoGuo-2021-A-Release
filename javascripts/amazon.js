//引用其他js脚本中的变量
import { cart,addProductToCart } from '../data/cart.js';
import { products } from '../data/products.js';

let productsHTML = '';

//把所有的产品都循环添加到productsHTML中。
products.forEach((p) => {
    productsHTML += `
    <div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${p.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${p.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${p.rating.stars * 10}.png">
      <div class="product-rating-count link-primary">
        ${p.rating.count}
      </div>
    </div>

    <div class="product-price">
      $${(p.priceCents / 100).toFixed(2)}
    </div>

    <div class="product-quantity-container">
      <select>
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary js-add-to-cart"
        data-product-id="${p.id}">
      Add to Cart
    </button>
  </div>
    `;
});

//最后获取父级元素，把里面的HTML填充进去。
document.querySelector('.products-grid').innerHTML = productsHTML;

//为“添加到购物车”按钮添加功能
document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        addProductToCart(productId);
        updateCartQuantiy();
        console.log(cart);

    });
});

//当页面载入的时候执行一次
updateCartQuantiy();
//更新页面中购物车中显示的商品数量
function updateCartQuantiy() {
    let cartQuantity = 0;
    cart.forEach((x) => {
        cartQuantity += x.quanity;
    });
    document.querySelector(".cart-quantity").innerHTML = cartQuantity;
}