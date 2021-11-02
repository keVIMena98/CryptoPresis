
// Image slider automatic slider
let counter = 1;

setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 10){
        counter = 1;
    }
    document.getElementById
}, 5000);

// Dropdown windows
document.addEventListener('click', e => {

    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    if(!isDropdownButton && e.target.closest('[data-dropdown]') != null){
        return;
    }

    let currentDropdown;
    if(isDropdownButton){
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown =>{
        if(dropdown === currentDropdown){
            return;
        }
        dropdown.classList.remove('active');
    })
});

// Modal window
const modal = document.getElementById('modal');
const btn = document.getElementById('mint');
const span = document.getElementsByClassName('close')[0];

btn.onclick = () => {
    modal.style.display = 'block';
};

span.onclick = () => {
    modal.style.display = 'none';
};

window.onclick = event => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};