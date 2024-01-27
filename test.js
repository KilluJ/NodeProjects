console.log('Hello!');
process.on('exit', function (code) {
    console.log('about to exit with code: ' + code);
});
process.nextTick(
    function() {
        console.log('nextTick callback!');
        console.log('byebye');
    }
);
console.log('NextTick was set!');
