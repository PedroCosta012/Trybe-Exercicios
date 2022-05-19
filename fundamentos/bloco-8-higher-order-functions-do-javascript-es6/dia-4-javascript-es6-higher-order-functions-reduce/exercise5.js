const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, name) => {
    acc += name.toLowerCase().split('').reduce((result, letter) => {
      return (letter.toLowerCase() === 'a') ? (result += 1) : (result)
    }, 0);
    return acc
  }, 0);
}

console.log(containsA());
