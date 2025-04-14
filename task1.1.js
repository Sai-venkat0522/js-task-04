//Task 1.1 callbacks
function calculate(a, b, callback) {
    const result = callback(a, b);
    console.log("The result is:", result);
}

// Example usage with addition
calculate(10, 4, function(x, y) {
    return x + y;
});

// Example usage with subtraction
calculate(15, 5, function(x, y) {
    return x - y;
});
