const pool = require("../config/db");

exports.getAll = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM Chapas");
  res.render("chapa/index", { chapa: rows });
};

exports.create = async (req, res) => {
  const { NomeChapa, cargo, candidato } = req.body;
  await pool.query(
    "INSERT INTO Chapas (NomeChapa, cargo, candidato) VALUES (?, ?, ?)",
    [NomeChapa, cargo, candidato]
  );
  res.redirect("/chapa");
};
