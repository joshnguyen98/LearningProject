const { selectUsers } = require('../models/models.users');

exports.getUsers = (req, res, next) => {
    selectUsers()
    .then((users) => {
        //console.log(users, "----------> CONTROLLER")
        res.status(200).send(users)
    })
};