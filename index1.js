function swapCase(str) {
    let swappedStr = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === char.toUpperCase()) {
            swappedStr += char.toLowerCase();
        } else {
            swappedStr += char.toUpperCase();
        }
    }
    return swappedStr;
}

// Example usage:
const input = 'The Quick Brown Fox';
const output = swapCase(input);
console.log(output); // Output: 'tHE qUICK bROWN fOX'