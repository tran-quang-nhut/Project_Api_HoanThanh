// phương trình đổi hình thẻ ở trang shop 

document.querySelectorAll(".feature__img__1").forEach(image_1 => {
    image_1.addEventListener("click", () => {
        var src = image_1.getAttribute("src");
        document.querySelector(".big__img__1").src = src;
    });
});