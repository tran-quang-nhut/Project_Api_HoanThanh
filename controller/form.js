// người dùng đăng ký
function addUser() {
  // debugger;
  event.preventDefault();
  // tạo ra 1 đối tượng
  var user = new User();
  user.email = document.getElementById("email").value;
  user.password = document.getElementById("password").value;
  user.confirmPassword = document.getElementById("passConfirm").value;
  user.name = document.getElementById("name").value;
  user.phone = document.getElementById("phone").value;
  user.gender = document.getElementById("male").value;
  user.gender = document.getElementById("female").value;
  // gọi api themUser để thêm người dùng vào
  if (user.password == user.confirmPassword) {
    var promise = axios({
      url: "https://shop.cyberlearn.vn/api/Users/signup",
      method: "POST",
      data: user,
      responseType: "json",
    });
    promise.then(function (res) {
      console.log(res);
    });
    promise.catch(function (err) {
      console.log(err);
    });
  } else {
    alert("vui lòng nhập mật khẩu trùng khớp");
  }
}
