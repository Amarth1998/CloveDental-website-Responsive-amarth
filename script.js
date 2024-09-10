// FAQ JS

const img1 = document.querySelector(".images");
const drop1 = document.querySelector(".drop1");

const img2 = document.querySelector(".images2");
const drop2 = document.querySelector(".drop2");

const img3 = document.querySelector(".images3");
const drop3 = document.querySelector(".drop3");

const img4 = document.querySelector(".images4");
const drop4 = document.querySelector(".drop4");


const img5 = document.querySelector(".images5");
const drop5 = document.querySelector(".drop5");

const img6 = document.querySelector(".images6");
const drop6 = document.querySelector(".drop6");
const img7 = document.querySelector(".images7");
const drop7 = document.querySelector(".drop7");
const img8 = document.querySelector(".images8");
const drop8 = document.querySelector(".drop8");

let toggle = true;


drop1.addEventListener('click', function () {
    toggle = !toggle;
    if (toggle) {
        img1.src = "/images/icon-plus.svg";
    }
    else {
        img1.src = "/images/icon-minus.svg"
    }
})

drop2.addEventListener('click', function () {
    toggle = !toggle;
    if (toggle) {
        img2.src = "/images/icon-plus.svg";
    }
    else {
        img2.src = "/images/icon-minus.svg"
    }
})

drop3.addEventListener('click', function () {
    toggle = !toggle;
    if (toggle) {
        img3.src = "/images/icon-plus.svg";
    }
    else {
        img3.src = "/images/icon-minus.svg"
    }
})

drop4.addEventListener('click', function () {
    toggle = !toggle;
    if (toggle) {
        img4.src = "/images/icon-plus.svg";
    }
    else {
        img4.src = "/images/icon-minus.svg"
    }
})


drop5.addEventListener('click', function () {
    toggle = !toggle;
    if (toggle) {
        img5.src = "/images/icon-plus.svg";
    }
    else {
        img5.src = "/images/icon-minus.svg"
    }
})


drop6.addEventListener('click', function () {
    toggle = !toggle;
    if (toggle) {
        img6.src = "/images/icon-plus.svg";
    }
    else {
        img6.src = "/images/icon-minus.svg"
    }
})


drop7.addEventListener('click', function () {
    toggle = !toggle;
    if (toggle) {
        img7.src = "/images/icon-plus.svg";
    }
    else {
        img7.src = "/images/icon-minus.svg"
    }
})


drop8.addEventListener('click', function () {
    toggle = !toggle;
    if (toggle) {
        img8.src = "/images/icon-plus.svg";
    }
    else {
        img8.src = "/images/icon-minus.svg"
    }
})