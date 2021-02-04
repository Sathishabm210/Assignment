const CircuitBreaker = require('./circuitBreaker.js')

// API request function 
const request = (parameters) => {
    const requestParams = parameters;
    // Here you can send third party API request 
    return new Promise((resolve, reject) => {
        if (requestParams.randomNumber < 5) {
            resolve({ data: "Success" })
        } else {
            reject({ message: "Sorry, Out of Service" })
        }
    })
}

const breaker = new CircuitBreaker(request);
let count = 0;
const myInterval = setInterval(() => {
    count++
    if (count == 1000) {
        stopInterval();
    }
    const randomNumber = Math.round(Math.random() * 10);
    breaker
        .fire({ randomNumber: randomNumber })
        .then((data) => console.log(data))
        .catch((err) => console.error(err))
}, 100);

function stopInterval() {
    clearInterval(myInterval);
}




