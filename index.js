
// Task 2
let data = [1, 2, 3]; 

let value = data.sort((a,b) => {
    return b-a});

console.log(value); 



// Task 3
 const texts = document.querySelector('#texts');

 let func = (idf, txt) => {
    return idf.innerText = txt
}
func(texts, 'Hello world');

console.log(texts);



//Task 1 от Перизат
let div = document.querySelector('div');
div.outerHTML = '<p class = "find">Новый элемент</p>';

let find = document.querySelector('.find');
find.innerHTML = div.innerText;

console.log(find.textContent);


//Task 2 от Перизат
let button = document.querySelector('#button').onclick;
let paragraph = document.querySelector('.paragraph');

function myFunction(){
    paragraph.innerText = prompt('Введите новый текст');
}

console.log(paragraph);


