const peca = 'peão'.toLowerCase();

switch (peca) {
    case "peão":
        console.log('Para frente apenas');
        break;
    case "torre":
        console.log('Vertical e horizontal (Quantas casas quiser e forem possíveis)!');
        break;
    case "cavalo":
        console.log('Em L, sendo 2 casas em um sentido e 1 em outro transversal a ultima casa do sentido anteriormente escolhidos!');
        break;
    case "bispo":
        console.log('Diagonais (Quantas casas quiser e forem possíveis)!');
        break;
    case "ranha":
        console.log('Todas as direções possíveis (Quantas casas quiser e forem possíveis)!');
        break;
    case "rei":
        console.log('Todas as direções possíveis (Apenas 1 casa de distância)!');
        break;
    default:
        console.log('Esta resposta não está prevista, tente outro valor!');
        break;
}