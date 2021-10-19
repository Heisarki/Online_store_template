const button = document.querySelector(".btn");
const nav = document.querySelector('.menu')

let toggle = true;


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


