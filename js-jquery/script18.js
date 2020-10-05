// $(".tab-button").click(function () {
//   $(".tab-button").removeClass("active");
//   $(this).addClass("active");
//   $(".tab-content").addClass("show");
// });

// $(".tab-button")
//   .eq(0)
//   .click(function () {
//     $(".tab-button").removeClass("active");
//     $(this).addClass("active");
//     $(".tab-content").removeClass("show");
//     $(".tab-content").eq(0).addClass("show");
//   });

// $(".tab-button")
//   .eq(1)
//   .click(function () {
//     $(".tab-button").removeClass("active");
//     $(this).addClass("active");
//     $(".tab-content").removeClass("show");
//     $(".tab-content").eq(1).addClass("show");
//   });

// $(".tab-button")
//   .eq(2)
//   .click(function () {
//     $(".tab-button").removeClass("active");
//     $(this).addClass("active");
//     $(".tab-content").removeClass("show");
//     $(".tab-content").eq(2).addClass("show");
//   });

// for문을 이용해서 위의 3개 문을 구현
// 숫자 3대신 $('.tab-button').length로 길이를 가져와서 넣어주면 더 좋은 방법임
for (let num = 0; num < 3; num++) {
  $(".tab-button")
    .eq(num)
    .click(function () {
      $(".tab-button").removeClass("active");
      $(this).addClass("active");
      $(".tab-content").removeClass("show");
      $(".tab-content").eq(num).addClass("show");
    });
}
