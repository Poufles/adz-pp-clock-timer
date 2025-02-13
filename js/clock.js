const time_clock = document.querySelector('#text-clock');

setInterval(() => {
    const time = new Date().toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    
    time_clock.textContent = time;
}, 1000);