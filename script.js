//your JS code here. If required.
document.getElementById('btn').addEventListener('click', () => {
    const input = document.getElementById('ip').value;
    const output = document.getElementById('output');

    // Clear previous output
    output.textContent = '';

    // Convert input to a number
    const number = parseFloat(input);

    if (isNaN(number)) {
        output.textContent = 'Please enter a valid number';
        return;
    }

    // Function to create a promise that resolves after a specified delay with the provided value
    function createPromise(value, delay) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(value);
            }, delay);
        });
    }

    // Start promise chain
    createPromise(number, 2000)
        .then(result => {
            output.textContent = `Result: ${result}`;
            return createPromise(result * 2, 1000); // Multiply by 2
        })
        .then(result => {
            output.textContent = `Result: ${result}`;
            return createPromise(result - 3, 1000); // Subtract 3
        })
        .then(result => {
            output.textContent = `Result: ${result}`;
            return createPromise(result / 2, 1000); // Divide by 2
        })
        .then(result => {
            output.textContent = `Result: ${result}`;
            return createPromise(result + 10, 1000); // Add 10
        })
        .then(finalResult => {
            output.textContent = `Final Result: ${finalResult}`;
        })
        .catch(error => {
            output.textContent = `Error: ${error}`;
        });
});
