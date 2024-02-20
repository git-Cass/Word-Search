function findIndices() {
    const target = document.getElementById('target').value;
    const words = ["I", "TWO", "FORTY", "THREE", 'JEN', "TWO", "tWo", "Two"];
    const indices = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(target)) {
            indices.push(i);
        }
    }

    displayResult(indices);
}

function displayResult(indices) {
    const resultDiv = document.getElementById('result');
    if (indices.length === 0) {
        resultDiv.innerHTML = 'Target word not found in the list.';
    } else {
        resultDiv.innerHTML = `Indices: ${indices.join(', ')}`;
    }
}