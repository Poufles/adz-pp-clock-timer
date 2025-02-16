const time_clock = document.querySelector('#text-clock');

time_clock.textContent = CurrentTime()

setInterval(() => CurrentTime(), 1000);

function CurrentTime() {
    const time = new Date().toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    return time;
}