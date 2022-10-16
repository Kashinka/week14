/* Сделайте простой калькулятор на 4 действия (сложение, вычитание, деление, умножение). 4 кнопки, по нажатию которые запрашиваются два числа и выдается результат их вычисления, соответствующий действию на кнопке. */

function showMessagePlus() {
  
    let x = prompt('Введите первое число', "x");

    let y = prompt('Введите второе число', "y");
    
    alert( Number(x) + Number(y) );
    
    }

function showMessageMinus() {
  
    let x = prompt('Введите первое число', "x");

    let y = prompt('Введите второе число', "y");
    
    alert( Number(x) - Number(y) );
    
    }
    
function showMessageDivide() {
  
    let x = prompt('Введите первое число', "x");

    let y = prompt('Введите второе число', "y");
    
    alert( Number(x) / Number(y) );
    
    }

function showMessageMultiply() {
  
    let x = prompt('Введите первое число', "x");

    let y = prompt('Введите второе число', "y");
    
    alert( Number(x) * Number(y) );
    
    }