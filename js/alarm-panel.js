const comp_alarm_panel = document.querySelector('.comp-alarm-panel');
const alarm_btn_down = comp_alarm_panel.querySelector('#btn-down');

alarm_btn_down.addEventListener('click', () => {
        comp_alarm_panel.classList.toggle('unexpanded');
});