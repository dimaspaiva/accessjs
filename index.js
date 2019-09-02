const ADODB = require("node-adodb");
const connection = ADODB.open(
  "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=./maisum.mdb;Persist Security Info=False"
);

const fabricante = async () => {
  try {
    const response = await connection.query("SELECT * FROM FABRICANTE");

    console.log("Qtd Fabricante " + response.length);
  } catch (error) {
    console.error(error);
  }
};

const produto = async () => {
  try {
    const response = await connection.query("SELECT * FROM PRODUTO");

    console.log("Qtd Produto " + response.length);
  } catch (error) {
    console.error(error);
  }
};

const grupoProd = async () => {
  try {
    const response = await connection.query("SELECT * FROM GRUPOPRODUTO");

    console.log("Qtd Grupo Produto " + response.length);
  } catch (error) {
    console.error(error);
  }
};

const aplicacaoProd = async () => {
  try {
    const response = await connection.query("SELECT * FROM PRODUTO_APLICACAO");

    console.log("Qtd Produto Aplicação " + response.length);
  } catch (error) {
    console.error(error);
  }
};

const produtoObs = async () => {
  try {
    const response = await connection.query("SELECT * FROM PRODUTO_OBS");

    console.log("Qtd Produto Obs " + response.length);
  } catch (error) {
    console.error(error);
  }
};

const refCruzada = async () => {
  try {
    const response = await connection.query("SELECT * FROM REFERENCIACRUZADA");

    console.log("Qtd Referencia cruzada " + response.length);
  } catch (error) {
    console.error(error);
  }
};

fabricante();
produto();
grupoProd();
refCruzada();
aplicacaoProd();
produtoObs();
