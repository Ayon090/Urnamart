const up = document.querySelector(".up");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    up.classList.add("scroll");
  } else {
    up.classList.remove("scroll");
  }
});

$(".flashSlide").slick({
  dots: false,
  infinite: true,
  speed: 1000,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
});

// TimeOut

// setTimeout(myFunc, 2000, "param1", "param2");

// function myFunc(p1, p2) {
//   document.getElementById("demo").innerHTML = "Parameters: " + p1 + " " + p2;
// }

const bar = document.querySelector("#bar");
const menu = document.querySelector(".mobile-menu");
const close = document.querySelector("#close");

bar.addEventListener("click", () => {
  menu.classList.add("activation");
});

close.addEventListener("click", () => {
  menu.classList.remove("activation");
});

const main = document.querySelector(".main");
const cat = document.querySelector(".cat");
const mainContent = document.querySelector(".mainContent");
const catContent = document.querySelector(".catContent");

main.addEventListener("click", () => {
  mainContent.style.display = "block";
  catContent.style.display = "none";
  main.style.color = "#ffa200";
  cat.style.color = "#0a3040";
});
cat.addEventListener("click", () => {
  catContent.style.display = "block";
  mainContent.style.display = "none";
  cat.style.color = "#ffa200";
  main.style.color = "#0a3040";
});

// const overlay = document.querySelector(".overlay");
// const glass = document.querySelector(".glassed");
// const crosses = document.getElementById("cross");
// glass.addEventListener("click", () => {
//  overlay.classList.add("bring");
// });
// crosses.addEventListener("click", () => {
//   overlay.classList.remove("bring");
//  });
