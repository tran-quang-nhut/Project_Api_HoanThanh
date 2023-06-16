function getAllProduct() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
    responseType: "json",
  });
  promise.then(function (res) {
    console.log(res);
    // renderProduct(res.data.content);
  });
  promise.catch(function (err) {
    console.log(err);
  });
}

getAllProduct();

function renderProduct(arr) {
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    var productSever = arr[i];
    var product = new Product();
    Object.assign(product, productSever);
    console.log(product);
    content += `
    <div class="item-product">
    <h3 class="title"> ${product.name}</h3>
    <img src="${product.image}" alt="" />
  </div>

        `;
    console.log(content);
  }
}
