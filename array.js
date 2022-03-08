// Функция принимает 2 параметра, первый параметр, любой обьект которым будет заполнен массив. 2 параметр - размер массива


function fillArry(element, size) {
    const resultArray = [];
    
    for (let i = 0; i < size; i++) {
        resultArray.push(element);
    } 

    return resultArray;
} 

console.log(fillArry('test', 4));



// fillArry('Test', 4) => ['Test', 'Test', 'Test', 'Test'];
