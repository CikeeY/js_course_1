/* 'use strict';


let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "50000");
    time = prompt("Введите дату в формате YYYY-MM-DD", "2000-01-14");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }

}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");

            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {
                appData.expenses[a] = b;
            } else {
                i--;
            }

        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Это высокий уровень достатка!");
        } else {
            console.log("Ошибочка...!");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },

    chooseIncome: function () {
        let prov = true,
            items;

        do {
            prov = true,
            items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
            appData.income = items.split(', ');

            appData.income.forEach(function (item) {
                if (typeof (item) === 'string' && typeof (item) != null && item != "") {

                } else {
                    prov = false;
                }
            });
        } while (prov == false);

        appData.income.push(prompt('Может что-то еще?', ''));
        appData.income.sort();

        appData.income.forEach(function (item, i) {
            console.log(i + 1 + ' item: ' + item);
        });
    }

};

appData.chooseIncome();

for (const key in appData) {
    console.log('Свойство ' + key + ' имеет значение ' + appData[key]);
} */
let y=1,
x=y=2,
a = [1, 2, 3],
b=a;
console.log(0 || "" || 2 || undefined || true || falsе);