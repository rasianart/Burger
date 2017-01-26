const mysql = require('mysql');
const connection = require('./connection.js');
const moment = require('moment');

let now = moment(new Date());
let nowMoment = moment(now).format('YYYY-MM-DD hh:mm:ss');

module.exports = {
  selectAll: (burgerRes) => {
      connection.query('SELECT * FROM burgers', (err, rows, fields) => {
          if (err) throw err;
          let devouredRows = [];
          let notDevouredRows = [];
          rows.forEach(function(itm) {
            if(itm.devoured === 0) {
              notDevouredRows.push(itm);
            } else if (itm.devoured === 1) {
              devouredRows.push(itm);
            }
          });
          burgerRes.render("index", {devoured: devouredRows, burgers: notDevouredRows});
      });
  },
  selectAllDevoured: (burgerRes) => {
      connection.query('SELECT * FROM burgers WHERE devoured = 1', (err, rows, fields) => {
        burgerRes.render("index", {devoured: rows});
      });
  },
  insertOne: (name) => {
      connection.query('INSERT INTO burgers SET ?', {burger_name: name, date: nowMoment}, (err) => {
          if (err) throw err;
        });
  },
  updateOne: (id, burgerRes) => {
      connection.query('UPDATE burgers SET devoured = 1 WHERE id = ?', [id], (err) => {
          if (err) throw err;
          burgerRes.redirect("/");
      });
  }
}
