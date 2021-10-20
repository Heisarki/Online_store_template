const nav_list = document.querySelector(".nav-list");
const nav = document.querySelector('.nav');

const header_width = document.querySelector(".header");

let toggle = true;

/*
button.addEventListener('click', e => {
    console.log(toggle);
    
    //nav.remove();
    if (toggle) {
        nav.style.display = "none";
        toggle = false;
    }
    else {
        nav.style.display = "inline";
        toggle = true;
    }
})

*/

window.addEventListener('resize', e => {
    console.log(window.innerHeight);
    console.log(window.innerWidth)
    let w = window.innerWidth;
    let h = window.innerWidth;

    if (w <= 700) {
        nav.style.justifyContent = "center";
        nav_list.style.display = "none";

        header_width.style.height = "400px"
    }
    else {
        nav_list.style.display = "flex"
        nav.style.justifyContent = "space-between"

        header_width.style.height = "600px"
    }

})


