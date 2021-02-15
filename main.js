window.onload = init;

function init() {
    window.state = {}
    window.state.last = 0;

    if (window.innerWidth >= 800) {
        document.querySelector("nav").children[0].classList.add("active-nav");
    
        window.onscroll = function() {
            let scrollPos = document.body.scrollTop || document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let elements = document.getElementsByTagName("nav")[0].children;
            let count = elements.length;
            let perc = Math.floor((scrollPos / height) * count) % (count + 1); // get which div is currently being viewed
            console.log(perc);
            perc = (perc >= count) ? count - 1 : perc;

            if (window.state.last != perc) {
                if (elements[perc]) {
                    let current = document.getElementsByClassName('active-nav')[0];
                    if (current) current.classList.remove('active-nav');

                    elements[perc].classList.add('active-nav');

                    let id = document.getElementById("body-wrapper").children[perc].id;
                    history.replaceState({}, '', `#${id}`);
                    window.state.last = perc;
                }
            }
        }
    }
}