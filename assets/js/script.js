// color nav on scroll & scroll to top
window.onscroll = () => {
    scrollFunction();
};
function scrollFunction() {
    let navbar = document.getElementById('navbar');
    let scrollButton = document.getElementById('scroll-up-button');

    if (
        document.body.scrollTop > 10 ||
        document.documentElement.scrollTop > 10
    ) {
        navbar.classList.add('bg-navbar');
    } else {
        navbar.classList.remove('bg-navbar');
    }

    if (
        document.body.scrollTop > 5500 ||
        document.documentElement.scrollTop > 5500
    ) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
}

// sliders
// const vines = document.querySelectorAll('.vine-slide');
// const vine = 'current-vine';
// const nextSlide = (item) => {
//     const current = document.querySelector(`.${item}`);
//     current.classList.remove(item);
//     console.log(vines);

//     if (current.nextElementSibling) {
//         current.nextElementSibling.classList.add(item);
//     } else {
//         vines[0].classList.add(item);
//     }
// };
// let vineSliderInterval = setInterval(() => nextSlide(vine), 5000);
