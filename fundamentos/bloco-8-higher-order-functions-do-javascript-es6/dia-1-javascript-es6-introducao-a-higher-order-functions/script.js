// Parte 1
const createPerson = (name) => ({ nome: name, email: `${name.toLowerCase().replace(' ', '')}@trybe.com` });

const newEmployees = (func) => ({
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  });

console.log(newEmployees(createPerson));

// Parte 2
const sorteio = (num, func) => func(num, Math.floor(Math.random() * 4) + 1);

const winOrLose = (apostado, resposta) => (apostado === resposta) ? ('Parabéns você ganhou!') : ('Tente novamente');

console.log(sorteio(3, winOrLose));

// Parte 3
const nota = (gabarito, respostas, func) => func(gabarito, respostas);

const defNota = (certo, seu) => {
  let soma = 0
  for (let i = 0; i < seu.length; i++) {
    if (seu[i] === certo[i]) {
      soma += 1;
    } else if (seu[i] !== certo[i] && soma >= 0.5 && !(seu[i] !== 'N.A')) {
      soma -= 0.5
    }
  }
  return soma;
};

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(nota(RIGHT_ANSWERS, STUDENT_ANSWERS, defNota));