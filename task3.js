function task3(a, b, c) {
  const [
    numberA,
    numberB,
    numberC,
  ] = [
    Number.parseInt(a),
    Number.parseInt(b),
    Number.parseInt(c),
  ];

  if (
    isNaN(numberA)
    && isNaN(numberB)
    && isNaN(numberC)
  ) {
    return 'pass the numbers, stupid idiot';
  }

  return numberA ** numberB - numberC;
}

process.stdout.write('Pass the numbers splitted a come:  ');
process.stdin.on('data', (input) => {
  const passed = input.toString().trim();
  const params = passed.split(', ');
  console.log(task3(...params));

  setTimeout(() => {
    process.exit(0);
  }, 2000);
});