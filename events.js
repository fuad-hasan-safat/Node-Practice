const EventEmitter = require('events');
const celebrity = new EventEmitter();

// Subscribe to celebrity for observer 1
celebrity.on('race', (result) => {
    if (result === 'win') {
        console.log('Congratulations! you are the best!');
    } else if (result === 'fail') {
        console.log('Boouh I can do better than that 11111111');
    }
});

// Subscribe to celebrity for observer 2
celebrity.on('race win', function () {
    console.log('Boouh I can do better than that');
});
process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
});


celebrity.emit('race', 'win');
celebrity.emit('race win');
celebrity.emit('race', 'fail');

