const ADODB = require("node-adodb");

const foo = async () => {
  try {
    return (connection = await ADODB.open(
      "Provider=Microsoft.Jet.OLEDB.4.0;Data SourceC:\\Users\\GP-ADM-TI-Dimas Paiv\\Desktop\\configuracao.mdb;"
    ).schema(20));
  } catch (error) {
    console.log(erroclsr);
  }
};

// const response = async () => {
//   const n = await foo();
//   console.log(n);
// };
// console.log(response);
// response();
