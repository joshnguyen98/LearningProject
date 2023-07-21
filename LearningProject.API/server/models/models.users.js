const db = require('../../db/index');

exports.selectUsers = () => {
    return db.query(`SELECT * FROM users;`)
    .then((result) => {
        return result.rows;
    })
};