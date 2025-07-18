const setTimeoutPromise = (ms) => new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
});

const promise = setTimeoutPromise(2000);

promise
    .then(() => {
        return 'a';
    })
    .then((data) => {
        console.log(data);
        return 'b';
    })
    .then((data) => {
        console.log(data);
    });


