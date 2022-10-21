/*Перепишите домашнее задание прошлой недели c помощью input для ввода данных и div (либо input) для вывода результата */

function showMessage() {
    let input = document.getElementById('name');

	// console.log(input.value);

    document.getElementById('hi').innerHTML = 'Привет, '+ input.value;
}

/* Создайте страницу, которая по нажатию на кнопку спрашивает имя у пользователя и выводит персонифицированное приветственное сообщение типа "Привет, Маша!". */

/*function showMessage() {
  
let name = prompt('Как тебя зовут?', "Имя");
alert('Привет, ' + name);
}*/

/*let showMessage = prompt('Как тебя зовут?', "Имя") => alert("Привет!");
showMessage();*/

/*let showMessage = () => {

    let name = prompt('Как тебя зовут?', "Имя");

    alert('Привет, ' + name);

};*/
