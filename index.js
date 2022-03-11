let greeting = 'Привет! Как тебя зовут?';
let name = prompt(greeting);

while (name == '' || name == null) {
  name = prompt(greeting);
}

  alert(name + ', я загадал число от 1 до 100. Попробуй отгадать его за наименьшее количество попыток. После каждой попытки я скажу "мало", "много", "угадал".');

let number = random(100);
let guess = prompt('Какое число я загадал?');
let numberOfGuesses = 1;

while (guess !== number) {
  numberOfGuesses = numberOfGuesses + 1;

    if(guess > number) {
       guess = prompt('Много. Попробуй еще раз');
    } else if (guess < number) {
        guess = prompt('Мало. Попробуй еще раз');
    }
}

alert('ты угадал это число ' + number + '. Тебе понадобилось ' + numberOfGuesses + ' попыток.');