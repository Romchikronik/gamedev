$(".gallery-slider").slick({
  prevArrow:
    '<button class="gallery-slider__prev"><i class="fa-solid fa-chevron-left"></i></button>',
  nextArrow:
    '<button class="gallery-slider__next"><i class="fa-solid fa-chevron-right"></i></button>',
});

$(".like-btn").on("click", function (e) {
  e.preventDefault();
  $(this).toggleClass("is-active");
});

$(".header-menu__burger").click(function () {
  if (!$(this).hasClass("open")) {
    $(this).addClass("open");
    $("html").css("overflow-y", "hidden");
    $(".header-menu").addClass("menu-open");
    $(".header-nav").addClass("fixed-top");
  } else {
    $(this).removeClass("open");
    $("html").css("overflow", "auto");
    $(".header-menu").removeClass("menu-open");
    $(".header-nav").removeClass("fixed-top");
  }
});

if (window.matchMedia("(max-width: 992px)").matches) {
  $(".gallery-slider__link").click(function (e) {
    e.preventDefault();
    /*   $(this).next().css("height", "120px").css("bottom", "0"); */
  });

  // do functionality on screens smaller than 991px
}
