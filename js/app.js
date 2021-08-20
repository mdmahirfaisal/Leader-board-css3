//  task number 1:

document.getElementById('top-players-21').style.color = 'hotPink';

document.getElementById('top-blogs').style.color = 'hotpink';

// task number 2:

document.getElementById('bg-color').style.backgroundColor = "rgba(" + 122 + "," + 122 + "," + 220 + ",1)";


// task number 3:

// const divList = document.querySelector('#list-holder');
// const addInput = document.querySelector('#add-input');
// const addButton = document.querySelector('#add-button');

// function addList() {
//     if (addInput.value == '') {
//         alert('Please  Enter the list name ');
//     }
//     else {
//         const ul = divList.querySelector('ul');
//         const li = document.createElement('li');
//         li.innerHTML = addInput.value;
//         addInput.value = '';
//         ul.appendChild(li);
//     }

// }

// document.getElementById('add-button').addEventListener('click', function () {
//     addList();
// })
const divList = document.querySelector('#list-holder');
const addButton = document.querySelector('#add-button');

function addList() {

    const ul = divList.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = "My Item Number:-";

    ul.appendChild(li);


}

document.getElementById('add-button').addEventListener('click', function () {
    addList();
})

// task number 4:

document.getElementById('plus-button').addEventListener('click', function () {
    const inputPlus = document.getElementById('input-number');
    const inputNumber = inputPlus.value;
    inputPlus.value = parseInt(inputNumber) + 1;

    if (inputNumber == 5) {
        inputPlus.value = parseInt(inputNumber);

    }

})
