/*Как найти в ней?…

1. Таблицу с `id="age-table"`
2. Все элементы `label` **внутри** этой таблицы (их три)
3. Форму `form` с именем `name="search-person"`*/

let elem = document.getElementById('age-table');

console.log(elem);

let tag = elem.getElementsByTagName('label');

console.log(tag);

let form = document.getElementsByName('search-person');

console.log(form);