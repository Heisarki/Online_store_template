const nav_list = document.querySelector(".nav-list");
const nav = document.querySelector('.nav');

const header_width = document.querySelector(".header");

const toggle_button = document.querySelector(".toggle-button");
const header = document.querySelector(".header");


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

toggle_button.addEventListener('click', e => {
    console.log('click')
    if (toggle) {
        nav_list.style.display = "flex";
        nav_list.style.backgroudColor = "white";
        toggle = false;
    }
    else {
        nav_list.style.display = "none";
        toggle = true;
    }
    
})


window.addEventListener('resize', e => {
    console.log(window.innerHeight);
    console.log(window.innerWidth)
    let w = window.innerWidth;
    let h = window.innerWidth;
/*
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
*/
})


