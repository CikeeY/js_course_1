'use strict';

let money, time;

function start(){
    money = +prompt ("Ваш бюджет на месяц?", "50000");
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");
    while(isNaN(money) || money==''||money!=null){
        money = +prompt ("Ваш бюджет на месяц?", "50000");
    }
}
    start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};



function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt ("Во сколько обойдется?", "");
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
    
            console.log ("done");
    
            appData.expenses[a] = b;
        } else {                            
            console.log ("bad result");
            i--;
        }
    }
}

chooseExpenses();

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed(1);
};

alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");

function detectLevel(){
    if (appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Произошла ошибка");
    }
}

function chooseOptExpenses(){
    
    for(let i=1; i<4; i++){
        appData.optionalExpenses[i] = prompt("Статья необязательных расходов?", '');
    }
}

