const comp_alarm_panel = document.querySelector('.comp-alarm-panel');
const btn_alarm_down = comp_alarm_panel.querySelector('#btn-down');
const btn_alarm_close = comp_alarm_panel.querySelector('#btn-exit');
const btn_alarm_open = document.querySelector('#clock>#btn-hamburger');

btn_alarm_down.addEventListener('click', () => {
        comp_alarm_panel.classList.toggle('unexpanded');
});

btn_alarm_close.addEventListener('click', () => {
        comp_alarm_panel.classList.toggle('unexpanded');
});

btn_alarm_open.addEventListener('click', () => {
        comp_alarm_panel.classList.toggle('unexpanded');
});