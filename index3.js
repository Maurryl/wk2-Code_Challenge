function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function filterPrimes(inputArray) {
    const result = [];
    for (const num of inputArray) {
        if (isPrime(num)) {
            result.push(num);
        }
    }
    return result;
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = filterPrimes(inputArray);
console.log(primeNumbers); // Output: [2, 3, 5, 7]

