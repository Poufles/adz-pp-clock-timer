const btn_am = document.querySelector('.comp-dialog button[value=am]');
const btn_pm = document.querySelector('.comp-dialog button[value=pm]');

function TickedTimePeriod (chosen, other) {
    chosen.classList.add('ticked');
    other.classList.remove('ticked');
}

btn_am.addEventListener('click', () => TickedTimePeriod(btn_am, btn_pm));
btn_pm.addEventListener('click', () => TickedTimePeriod(btn_pm, btn_am));