const notifier = require('node-notifier');

function remindToTakeBreak() {
    notifier.notify({
        title: 'Time to take a break',
        message: 'Hey! Take a break to rest your eyes and stretch your legs.',
        sound: true,
    });
}

function startTimer(options = {}) {
    const { breakInterval = 60 * 1000 } = options;

    setInterval(() => {
        remindToTakeBreak();
    }, breakInterval);
}

module.exports = startTimer;
