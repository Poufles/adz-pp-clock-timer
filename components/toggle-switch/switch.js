const comp_switch = document.querySelectorAll('.comp-switch');

comp_switch.forEach(switch_element => {
    switch_element.addEventListener('click', () => {
        const toggle_button = switch_element.querySelector('.circle-toggle');
        toggle_button.classList.toggle('on');
    });
});