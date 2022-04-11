let infoMargarida = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Exercício 1
console.log('Bem-vinda, ' + infoMargarida.personagem);

// Exercício 2
infoMargarida['recorrente'] = 'Sim';
console.log(infoMargarida);

// Exercício 3
for (let inf in infoMargarida) {
    console.log(inf);
}

// Exercício 4
for (let data in infoMargarida) {
    console.log(infoMargarida[data]);
}

// Exercício 5
let infoTioPAtinhas = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}

console.log(infoMargarida.personagem + ' e ' + infoTioPAtinhas.personagem);
console.log(infoMargarida.origem + ' e ' + infoTioPAtinhas.origem);
console.log(infoMargarida.nota + ' e ' + infoTioPAtinhas.nota);
if (infoMargarida.recorrente === 'Sim' && infoTioPAtinhas.recorrente == 'Sim') {
    console.log('Ambos recorrentes');
} else if (infoMargarida.recorrente === 'Sim' && infoTioPAtinhas.recorrente == 'Não') {
    console.log('Apenas Margarida é recorrente');
} else if (infoMargarida.recorrente === 'Não' && infoTioPAtinhas.recorrente == 'Sim') {
    console.log('Apenas Tio Patinhas é recorrente');
} else if (infoMargarida.recorrente === 'Sim' && infoTioPAtinhas.recorrente == 'Sim') {
    console.log('Ambos não recorrentes');
}

// Exercício 6
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
};

console.log("O livro favorito de Julia Pessoa se chama '" + leitor['livrosFavoritos'][0]['titulo'] + "'");

// Exercício 7
leitor.livrosFavoritos.push(
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
    }
);
console.log(leitor.livrosFavoritos);

// Exercício 8
let numLivros = leitor.livrosFavoritos.length;
console.log('Julia tem ' + numLivros + ' livros favoritos.');
