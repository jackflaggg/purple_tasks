function rollDice(dice) {

    const sides = Number.parseInt(dice.slice(-1));


    if (sides < 4 || (sides % 2 !== 0 && sides !== 16 && sides !== 20)) {
        return "Неподдерживаемый кубик. Используйте: d4, d6, d8, d10, d12, d16, d20";
    }

    const randomNumber = Math.floor(Math.random() * sides) + 1;

    return randomNumber;
}
