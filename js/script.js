let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    // Проверка
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", "");
            
            if ( (typeof(a))=== 'string' && (typeof(a)) !=null && (typeof(b)) !=null && a != "" && b != "" && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                i = i -1;
            }
        }

    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget/30).toFixed();

        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },

    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
            
        }   else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        
        }   else if (appData.moneyPerDay > 2000 ) {
            console.log('Высокий уровень достатка');
        
        }   else {
            console.log("Произошла ошибка");
        }

    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Каоква сума накоплений?"),
                percent = +prompt("Под какой процент?");
            appData.moneyIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.moneyIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 3; i++) {
            let opt = prompt("Статья необезательных расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        while(!isNaN(items) || items == "" || items == null) {
            items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
        }
        appData.income = items.split(', ');
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort();
        appData.income.forEach(function(item, i, mass){
            alert("Способ доп. заработка: " + "№ " + ++i + ') ' + item);
        }
        );
        
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key);
}
