let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

for (let i=0; i < 2; i++) {

	let rep = false;

	while (rep == false) {

		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');

		if (typeof (a) === "string" && typeof (a) != null && typeof(b) != null && a != "" && b != '' && a.length < 50) {
			appData.expenses[a] = b;
			rep = true;
		} else {
			rep = false;
		}
	}
/* 
	do {
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');

		if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof(b)) != null && a != "" && b != '' && a.length < 50) {
			appData.expenses[a] = b;
			rep = true;
		} else {
			rep = false;
		}
	} while (rep==false); */
}

appData.moneyPerDay=(appData.budget / 30);

alert("Ваш ежедневный бюджет " + appData.moneyPerDay);