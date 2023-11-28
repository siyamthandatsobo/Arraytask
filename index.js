const array1Input = document.getElementById('array1');
const array2Input = document.getElementById('array2');
const output = document.getElementById('output');

array1Input.addEventListener("keyup", () => {
    const array1 = array1Input.value.split(',').map(Number);
    const array2 = array2Input.value.split(',').map(Number);
    output.textContent = difference(array1, array2).join(', ');
});



function difference(array1, array2) {
    let newArray = [...array1, ...array2];
    newArray=newArray.flat();
    const uniqueValues = [];
    newArray.forEach(item => {
        const stringValue = item.toString();
        let found = false;
        uniqueValues.forEach(value => {
            if (value === stringValue) {
                found = true;
            }
        });

        // If not found, add it to uniqueValues array
        if (!found) {
            uniqueValues.push(stringValue);
        }
    });

    return uniqueValues.sort((a, b) => a - b);            // Sort the array
}
