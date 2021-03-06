document.addEventListener(
  "DOMContentLoaded",
  function () {
    // header scroll
    let scrollpos = window.scrollY;
    const header = document.querySelector(".nav");
    const header_height = header.offsetHeight;

    const add_class_on_scroll = () => header.classList.add("scroll-class");
    const remove_class_on_scroll = () => header.classList.remove("scroll-class");

    const mybutton = document.querySelector(".back-to-top");

    window.addEventListener("scroll", function () {
      scrollpos = window.scrollY;

      if (scrollpos >= header_height) {
        add_class_on_scroll();
      } else {
        remove_class_on_scroll();
      }

      if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    });
  },
  false
);

// window.addEventListener("scroll", function () {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// });

let divisor = document.getElementById("divisor"),
  slider = document.getElementById("slider");

slider.oninput = function moveDivisor() {
  divisor.style.width = slider.value + "%";
};

let divisor2 = document.getElementById("divisor2"),
  slider2 = document.getElementById("slider2");

slider2.oninput = function moveDivisor() {
  divisor2.style.width = slider2.value + "%";
};

let divisor3 = document.getElementById("divisor3"),
  slider3 = document.getElementById("slider3");

slider3.oninput = function moveDivisor() {
  divisor3.style.width = slider3.value + "%";
};
