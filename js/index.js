$(document).ready(function(){
    $(".dropdown").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
});
$(document).ready(function(){

    $('.slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
    fade: true,
    slide: 'div',
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<span class="priv_arrow"><i class="fal fa-chevron-left"></i></span>',
    nextArrow:'<span class="next_arrow"><i class="fal fa-chevron-right"></i></span>',
    });
});
var DB = new Array;
var lb;
function load_product(name,price,a) {
    localStorage.setItem("name",name);
    localStorage.setItem("price",price);
    img_src =  a.getAttribute("src");
    localStorage.setItem("src",img_src);
}
function load2(x) {
       var parent =  x.children;
    localStorage.setItem("src",parent[0].src)
    localStorage.setItem("name",parent[1].textContent);
    localStorage.setItem("price",parent[2].textContent);
    window.location.href = "./product.html";
}
function AddToCart() {
    var add_name = document.getElementById('coffee_name').textContent;
    var add_price = document.getElementById('product_price').textContent;
    //var add_img = document.getElementById('product_img').src;
    var add_img = $('#product_img').prop('src')
    var add_count = document.getElementById('count').value;
    var product = [add_name,add_price,add_img, add_count];
    var oldDB = localStorage.getItem("data");
    for (let i = 0 ; i < DB.length; i++){
        DB[i] = null;
    }
    if (oldDB == null){
        DB.push(product)
    }else {
        DB.push(oldDB);
    }
    console.log(DB.length)
    //localStorage.setItem("data",DB);
    localStorage.removeItem("data");
    localStorage.setItem('data',DB);
}
function del(){
    window.localStorage.clear();
}