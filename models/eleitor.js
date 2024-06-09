const db = require("../config/db");

class Eleitor {
  static getAll(callback) {
    const sql = "SELECT * FROM Eleitores";
    db.query(sql, (err, results) => {
      if (err) throw err;
      callback(results);
    });
  }

  static create(data, callback) {
    const sql = "INSERT INTO Eleitores SET ?";
    db.query(sql, data, (err, results) => {
      if (err) throw err;
      callback(results);
    });
  }
}

module.exports = Eleitor;