console.log("hello");
window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("productid");
  console.log("params", myParam);

  //call api load lên giao diện
  getProductByID(myParam);
};

function getProductByID(id) {
  var promise = axios({
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
    method: "GET",
    responseType: "json",
  });
  promise.then(function (res) {
    console.log(res.data.content);
    renderProductID(res.data.content);
  });
  promise.catch(function (err) {
    console.log(err);
  });
}

function renderProductID(arr) {
  var content = "";
  var productSever = arr;
  var product = new Product();
  Object.assign(product, productSever);
  console.log(product.relatedProducts);
  var contentRelated = "";
  for (var i = 0; i < product.relatedProducts.length; i++) {
    var productRelated = new Product();
    Object.assign(productRelated, product.relatedProducts[i]);
    console.log(productRelated);
    contentRelated += `
        <div class="modal__category__content col col-lg-3 col-md-4 col-sm-6">
            <div class="modal__category__item">
                <div class="modal__item__img">
                    <img src="${productRelated.image}" alt="" class="img__block">
                </div>
                <div class="modal__item__star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <div class="modal__item__text">
                    <h3 class="title"><a href="./product.html?productid=${productRelated.id}">${productRelated.name}</a></h3>
                    <p class="sub__title">
                        <a href="#">
                        ${productRelated.shortDescription}
                        ${productRelated.relatedProduct}
                        </a>
                    </p>
                    <div class="item__text__price d-flex">
                        <p class="title__1">$${productRelated.price}.00</p>

                    </div>
                </div>
                <div class="d-flex justify-content-between modal__item__cart">
                    <div class="item__cart_left">
                        <a href="./product/product.html">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <span>
                                Add to cart
                            </span>
                        </a>
                    </div>
                    <div class="item__cart__right">
                        <i class="fa-solid fa-receipt"></i>
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </div>
                </div>
            </div>
        </div>
        `;
  }
  content += `
        <section class="product">
            <div class="container">
                <div class="product__text">
                    <a class="product__text__link-1" href="">
                        <span>Home
                        </span>
                    </a>
                    <i class="fa-solid fa-angle-right"></i>

                    <a class="product__text__link-2" href="">
                        <span>${product.name}</span>
                    </a>
                </div>
                <div class="product__content">
                    <div class="row">
                        <div class="col-5 product__item__left">
                            <div class="product__item__img">
                                <img src="${product.image}" alt="
                                NIKE FREE RN 2018" class="img__block">
                            </div>
                            <div class="item__left__details">
                                <div class="row owl-carousel d-block">
                                    <div class="col item__img">
                                        <img src="${product.image}" alt="
                                        NIKE FREE RN 2018"
                                            class="img__block">
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col-7 product__item__right">
                            <h3 class="title">
                                ${product.name}
                            </h3>
                            <p class="sub__title">
                                ${product.shortDescription}
                            </p>
                            <div class="item__review d-flex">
                                <div class="item__review__star">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <span>
                                    <i class="fa-regular fa-comment"></i>
                                    Read review(2)</span>
                                <span>
                                    <i class="fa-solid fa-pen"></i>
                                    Write a review
                                </span>
                            </div>
                            <div class="item__sale d-flex align-items-center">
                                <p class="sub__title__2">
                                    $${product.price}.00
                                </p>
                            </div>
                            <p class="sub__title__2">
                                ${product.description}
                            </p>
                            <p class="title__size">Size</p>
                            <select name="" id="">
                                <option value="0">${product.size[0]}</option>
                                <option value="1">${product.size[1]}</option>
                                <option value="2">${product.size[2]}</option>
                                <option value="3">${product.size[3]}</option>
                                <option value="4">${product.size[4]}</option>
                                <option value="5">${product.size[5]}</option>
                                <option value="6">${product.size[6]}</option>
                            </select>
                            <p class="title__quantity">
                                Quantity
                            </p>
                            <div class="product__quantity d-flex">
                                <div class="input__quantity">
                                    <input value="1" type="text" min="1" class=" d-block input-group form-control">
                                    <span class="input-group d-flex flex-column">
                                        <button class="btn">
                                            <i class="fa-solid fa-chevron-up"></i>
                                        </button>
                                        <button class="btn">
                                            <i class="fa-solid fa-angle-down"></i>
                                        </button>
                                    </span>
                                </div>
                                <button class="btn product__btn">
                                    ADD TO CART
                                </button>
                            </div>
                            <p class="title__stock">
                                <i class="fa-solid fa-check"></i>
                                In Stock have ${product.quantity}
                            </p>
                            <div class="product__social">
                                <span>Share</span>
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-google-plus-g"></i>
                                <i class="fa-brands fa-pinterest"></i>
                            </div>
                            <div class="product__service">
                                <p>
                                    <i class="fa-solid fa-shield-heart"></i>
                                    Security Policy (Edit With Customer Reassurance Module)
                                </p>
                                <p>
                                    <i class="fa-solid fa-truck"></i>
                                    Delivery Policy (Edit With Customer Reassurance Module)
                                </p>
                                <p>
                                    <i class="fa-solid fa-right-left"></i>
                                    Return Policy (Edit With Customer Reassurance Module)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;

  document.getElementById("tbodyProductId").innerHTML = content;
  document.getElementById("tbodyProductRelated").innerHTML = contentRelated;
}
