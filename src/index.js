// import {saveAs} from 'file-saver';

// var FileSaver = require('file-saver');
// var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
// FileSaver.saveAs(blob, "hello world.txt");
// console.log(FileSaver);
import {createTable} from './modules/createTable.js';
import {printSalary} from './modules/printSalary.js';

const createTableBtn = document.body.querySelector('.tableBtn');
createTableBtn.addEventListener('click', createTable);

const calculateBtn = document.body.querySelector('.calculateBtn');
calculateBtn.addEventListener('click',printSalary);

// const inputHighlight = () => {
//     const inputFields = document.querySelectorAll('.table input[type=text]');
//     inputFields.forEach(field => {
//         field.onfocus = function () { this.select(); }
//     });
// }

