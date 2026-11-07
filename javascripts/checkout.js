import { cart,removeProductFromCart } from '../data/cart.js';
import { products } from '../data/products.js';

let cartSummaryHTML='';
console.log(cart);
cart.forEach((cartItem)=>{

    const productId=cartItem.productId;
    let matchedProduct=products.find((x)=>x.id==productId);
    console.log(matchedProduct);
    cartSummaryHTML+=`
    <div class="cart-item-container js-cart-item-container-${matchedProduct.id}">
    <div class="delivery-date">
      Delivery date: Tuesday, June 21
    </div>

    <div class="cart-item-details-grid">
      <img class="product-image"
        src="${matchedProduct.image}">

      <div class="cart-item-details">
        <div class="product-name">
          ${matchedProduct.name}
        </div>
        <div class="product-price">
          $${(matchedProduct.priceCents / 100).toFixed(2)}
        </div>
        <div class="product-quantity">
          <span>
            Quantity: <span class="quantity-label">${cartItem.quanity}</span>
          </span>
          <span class="update-quantity-link link-primary">
            Update
          </span>
          <span class="delete-quantity-link link-primary js-delete-link"
            data-product-id="${matchedProduct.id}">
            Delete
          </span>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>
        <!-- 一组Radio button共享一个相同的name,不同组就需要不同的name -->
        <div class="delivery-option">
          <input type="radio" checked
            class="delivery-option-input"
            name="delivery-option-${matchedProduct.id}">
          <div>
            <div class="delivery-option-date">
              Tuesday, June 21
            </div>
            <div class="delivery-option-price">
              FREE Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${matchedProduct.id}">
          <div>
            <div class="delivery-option-date">
              Wednesday, June 15
            </div>
            <div class="delivery-option-price">
              $4.99 - Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${matchedProduct.id}">
          <div>
            <div class="delivery-option-date">
              Monday, June 13
            </div>
            <div class="delivery-option-price">
              $9.99 - Shipping
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
});
document.querySelector(".order-summary").innerHTML=cartSummaryHTML;
console.log(cartSummaryHTML);

document.querySelectorAll(".js-delete-link").forEach((link)=>{
    link.addEventListener('click',()=>{
        const productId=link.dataset.productId;
        removeProductFromCart(productId);

        const productElement=document.querySelector(`.js-cart-item-container-${productId}`);
        productElement.remove();
    })
});