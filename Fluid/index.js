const prev = document.querySelector(".prev")
const nex = document.querySelector(".nex") 
const sliders = document.querySelectorAll(".slider")
const fa = document.querySelector(".fa")
const ft = document.querySelector(".ft")
const nav = document.querySelector(".nav")
const icon = document.querySelector(".icon")

if (window.innerWidth < 700) {
    fa.style.display = "none"
    fa.style.display = "none";
        ft.style.display = "none";
        icon.style.display = "inherit"
}

window.addEventListener("resize", () => {
    if (window.innerWidth < 700) {
        fa.style.display = "none";
        ft.style.display = "none";
        icon.style.display = "inherit"
    } else {
        fa.style.display = "inherit";
        ft.style.display = "inherit";
        icon.style.display = "none"
    }
})


let count = 0;
nex.addEventListener("click", () => {
    if (count < 2) {
        count += 1;
    } else {
        count = 0;
    }
    console.log("Clicked")
    console.log(sliders)
    sliders.forEach((slider, index) => {
        let value = -(((count + 1) * 100) - 100);
        slider.style.transform = `translateX(${value}%)`;
    })
})

prev.addEventListener("click", () => {
    if (count > 0) {
        count -= 1;
    } else {
        count = 2;
    }
    console.log("Clicked")
    console.log(sliders)
    sliders.forEach((slider, index) => {
        let value = -(((count + 1) * 100) - 100);
        slider.style.transform = `translateX(${value}%)`;
    })
})