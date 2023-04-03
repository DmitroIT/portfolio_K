// burger
$(document).ready(function () {
    $(".burger").on("click", function (event) {
        $(".burger, .nav__item").toggleClass("active");
        $("body").toggleClass("lock");
    })
    $(".list__item-link").on("click", function () {
        $(".burger, .nav__item").removeClass("active");
        $("body").removeClass("lock");
    })
});



// aos
  AOS.init();
