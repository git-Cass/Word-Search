function findIndex() {
    let target = document.getElementById('target').value;
    let words = ["I", "TWO", "FORTY", "THREE", 'JEN', "TWO", "tWo", "Two"];
    let index = [];

    
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(target)) {
            index.push(i);
        }
    }

    let resultDiv = document.getElementById('result');
    if (index.length === 0) {
        resultDiv.innerHTML = 'Target word not found in the list.';
    } else {
        resultDiv.innerHTML = `INDICES: ${index.join(', ')}`;
    }
}