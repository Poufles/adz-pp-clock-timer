const comp_alarm_panel = document.querySelector('.comp-alarm-panel');
const alarm_btn_down = comp_alarm_panel.querySelector('#btn-down');
const alarm_btn_close = comp_alarm_panel.querySelector('#btn-exit');

alarm_btn_down.addEventListener('click', () => {
        comp_alarm_panel.classList.toggle('unexpanded');
});

alarm_btn_close.addEventListener('click', () => {
        
});