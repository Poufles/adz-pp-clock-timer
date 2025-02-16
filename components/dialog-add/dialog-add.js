const item_container = document.querySelector('#item-container');
const time_inputs = document.querySelectorAll('.comp-dialog input[type=number]');
const btn_am = document.querySelector('.comp-dialog button[value=am]');
const btn_pm = document.querySelector('.comp-dialog button[value=pm]');
const btn_confirm = document.querySelector('.comp-dialog #btn-confirm');
let tickedTimePeriod = 'am';

function TickedTimePeriod(chosen, other) {
    chosen.classList.add('ticked');
    other.classList.remove('ticked');

    tickedTimePeriod = chosen.value
}

function CreateAlarm(insertionNode) {
    const hour_tens = document.querySelector('.comp-dialog #num-1');
    const hour_ones = document.querySelector('.comp-dialog #num-2');
    const min_tens = document.querySelector('.comp-dialog #num-3');
    const min_ones = document.querySelector('.comp-dialog #num-4');

    const new_alarm_item = document.createElement('div');
    new_alarm_item.textContent = `${hour_tens.value}${hour_ones.value} : ${min_tens.value}${min_ones.value} ${tickedTimePeriod.toUpperCase()}`;

    insertionNode.appendChild(new_alarm_item);
}

let inputIndex = 0;
time_inputs.forEach(input => {
    input.addEventListener('keydown', (e) => {
        if (input.value.length > 0) input.value = input.value[1];
    });

    input.addEventListener('keyup', (e) => {
        if (inputIndex !== 3) {
            time_inputs.item(++inputIndex).focus()
        } else {
            input.blur();
            inputIndex = 0;
        };
    })
});

btn_am.addEventListener('click', () => TickedTimePeriod(btn_am, btn_pm));
btn_pm.addEventListener('click', () => TickedTimePeriod(btn_pm, btn_am));
btn_confirm.addEventListener('click', () => CreateAlarm(item_container));