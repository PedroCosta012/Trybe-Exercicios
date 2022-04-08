const valorProduto = 16;
const valorVenda = 19.2;

if (valorProduto > 0 && valorVenda > 0) {
    let lucro = ((valorVenda - (valorProduto * 1.2)) * 1000);
    console.log("O lucro com a venda de 1000 destes produtos é igual a: ", lucro);
} else {
    console.log("Não é possível operar com valores menores que 0!")
}
