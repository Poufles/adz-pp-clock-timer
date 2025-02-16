const comp_switch = document.querySelectorAll('.comp-switch');

comp_switch.forEach(switch_element => AddToggleFunction(switch_element));

function AddToggleFunction(element) {
    element.addEventListener('click', () => {
        const toggle_button = element.querySelector('.circle-toggle');
        toggle_button.classList.toggle('on');
    });
}

export {AddToggleFunction};