// escreva greet abaixo

const greet = (...rest) => {
  const [name, salutation = 'Hi'] = rest;
  return `${salutation} ${name}`;
}

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'