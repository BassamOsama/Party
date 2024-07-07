"use strict";

/* --------------------------------- Header --------------------------------------------- */
$(".openNav").click(function () {
  $("#leftNav").animate({ width: "250px" }, 50);
  $("#homeContent").animate({ marginLeft: "250px" }, 50);
});

$(".closeBtn").click(function () {
  $("#leftNav").animate({ width: "0px" }, 50);
  $("#homeContent").animate({ marginLeft: "0px" }, 50);
});

/* ------------------------------ Scroll Speed ------------------------------------------- */
$("#leftNav a").click(function (event) {
  event.preventDefault();
  const sectionId = $(this).attr("href");
  const sectionPosition = $(sectionId).offset().top;
  $("html, body").animate({ scrollTop: sectionPosition }, 50);
});

/* --------------------------------- Slider --------------------------------------------- */
$(".toggle").click(function () {
  $(".inner").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});

/* --------------------------------- Counter -------------------------------------------- */
window.onload = function () {
  countDownToTime("14 December 2024 12:00:00");
};

function countDownToTime(countTo) {
  const futureDate = new Date(countTo).getTime() / 1000;

  function updateCountdown() {
    const now = new Date().getTime() / 1000;
    const timeDifference = futureDate - now;

    const days = Math.floor(timeDifference / (24 * 60 * 60));
    const hours = Math.floor((timeDifference % (24 * 60 * 60)) / 3600);
    const mins = Math.floor((timeDifference % 3600) / 60);
    const secs = Math.floor(timeDifference % 60);

    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $(".seconds").html(`${secs} s`);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

/* -------------------------------- Textarea ---------------------------------------------- */
const maxLength = 100;

$(document).ready(function () {
  const $textarea = $("textarea");
  const $char = $("#char");

  $textarea.keyup(function () {
    const length = $(this).val().length;
    const amountLeft = maxLength - length;

    if (amountLeft <= 0) {
      $char.text("Limited Characters Reached");
    } else {
      $char.text(
        `${amountLeft} Character${amountLeft === 1 ? "" : "s"} Remaining`
      );
    }
  });
});
