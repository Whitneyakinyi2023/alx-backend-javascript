function calculateNumber(type, a, b) {
    // Rounding the values
    const c = Math.round(a);
    const d = Math.round(b);

    // Return of sum, subtract or divide
    if (type === 'SUM') {
        return c + d;
    } else if (type === 'SUBTRACT') {
        return c - d;
    } else if (type === 'DIVIDE') {
        if (d === 0) {  // Corrected check for division by zero
            return 'Error';
        }
        return c / d;
    } else {
        return 'Invalid operation type';
    }
}

module.exports = calculateNumber;
