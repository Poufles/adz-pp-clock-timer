const time_clock = document.querySelector('#text-clock');
const comp_clock = document.querySelector('#comp-clock');

time_clock.textContent = CurrentTime()

comp_clock.addEventListener('click', () => {
    // Add function here for the clean design
})

setInterval(() => CurrentTime(), 1000);

function CurrentTime() {
    const time = new Date().toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    return time;
}