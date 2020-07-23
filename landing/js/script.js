$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(
      ".header__burger,.header__menu, .authorization, .select-lang"
    ).toggleClass("active");
    $("body").toggleClass("lock");
  });
});
