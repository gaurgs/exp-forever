
const forever = require('forever-monitor');
const child = new (forever.Monitor)('server.js', {
    silent: false,
    command: 'node',
    env: {},
    killTree: true
});


child.on('restart', () => {
    console.log('Server was restarted.');
})

child.on('exit', () => {
    console.log("Server is close. Restarting...")
});


['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT','SIGBUS', 'SIGFPE', 'SIGUSR1'].forEach(element => {
    process.on(element, () => {
        console.log('Receive the Kill Signal...' + Date(Date.now(), element));
        child.stop()
    });
});

child.start();