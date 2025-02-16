import { AddToggleFunction } from "./switch.js";

const alarm_panel = document.querySelector('.comp-alarm-panel');
const alarm_section = alarm_panel.querySelector('#alarm-section')
const btn_add = alarm_panel.querySelector('#btn-add');
const dialog = document.querySelector('.comp-dialog');
const time_inputs = dialog.querySelectorAll('input[type=number]');
const btn_am = dialog.querySelector('button[value=am]');
const btn_pm = dialog.querySelector('button[value=pm]');
const btn_confirm = dialog.querySelector('#btn-confirm');
const btn_cancel = dialog.querySelector('#btn-cancel');

let tickedTimePeriod = 'am';

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

btn_add.addEventListener('click', () => {
    dialog.classList.add('open');
});
btn_am.addEventListener('click', () => TickedTimePeriod(btn_am, btn_pm));
btn_pm.addEventListener('click', () => TickedTimePeriod(btn_pm, btn_am));
btn_confirm.addEventListener('click', () => CreateAlarm(alarm_section));
btn_cancel.addEventListener('click', () => {
    dialog.classList.remove('open');
});

function TickedTimePeriod(chosen, other) {
    chosen.classList.add('ticked');
    other.classList.remove('ticked');

    tickedTimePeriod = chosen.value
}

function CreateAlarm(insertionNode) {
    const itemLength = insertionNode.querySelectorAll('.alarm-item').length + 1;
    const hour_tens = document.querySelector('.comp-dialog #num-1');
    const hour_ones = document.querySelector('.comp-dialog #num-2');
    const min_tens = document.querySelector('.comp-dialog #num-3');
    const min_ones = document.querySelector('.comp-dialog #num-4');
    const alarm_item_template =
    `<article class="container alarm-item" id="alarm-item-${itemLength}">
                    <p class="alarm-time">
                    ${hour_tens.value}${hour_ones.value} : ${min_tens.value}${min_ones.value} ${tickedTimePeriod.toUpperCase()}
                    </p>
                    <div class="container alarm-actions">
                        <button type="button" class="comp-btn no-bg" id="btn-delete">
                            <?xml version="1.0" ?><svg class="small" viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M432 80h-82.38l-34-56.75C306.1 8.827 291.4 0 274.6 0H173.4C156.6 0 141 8.827 132.4 23.25L98.38 80H16C7.125 80 0 87.13 0 96v16C0 120.9 7.125 128 16 128H32v320c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V128h16C440.9 128 448 120.9 448 112V96C448 87.13 440.9 80 432 80zM171.9 50.88C172.9 49.13 174.9 48 177 48h94c2.125 0 4.125 1.125 5.125 2.875L293.6 80H154.4L171.9 50.88zM352 464H96c-8.837 0-16-7.163-16-16V128h288v320C368 456.8 360.8 464 352 464zM224 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S208 183.2 208 192v208C208 408.8 215.2 416 224 416zM144 416C152.8 416 160 408.8 160 400V192c0-8.844-7.156-16-16-16S128 183.2 128 192v208C128 408.8 135.2 416 144 416zM304 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S288 183.2 288 192v208C288 408.8 295.2 416 304 416z" />
                            </svg>
                        </button>
                        <button class="container comp-switch" id="switch-${itemLength}">
                            <div class="circle-toggle"></div>
                        </button>
                    </div>
                </article>`

    insertionNode.appendChild(document.createRange().createContextualFragment(alarm_item_template));

    AddToggleFunction(insertionNode.querySelector(`#alarm-item-${itemLength} #switch-${itemLength}`));
}