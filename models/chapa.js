const pool = require("../config/db");

async function getAllChapas() {
  const [rows] = await pool.query("SELECT * FROM Chapas");
  return rows;
}

async function createChapa(NomeChapa, cpf, endereco) {
  await pool.query(
    "INSERT INTO Chapa (NomeChapa, cargo, candidato) VALUES (?, ?, ?)",
    [NomeChapa, cargo, candidato]
  );
}

module.exports = {
  getAllChapas,
  createChapa,
};
