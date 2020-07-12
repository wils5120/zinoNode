const User = require('../models/users');


function index(req, res) {
    User.find({}).then(users => {
        if (users.length) return res.status(200).send({ users });
        return res.status(204).status({ message: 'Not content' });
    }).catch(err => res.status(500).send({ err }));
};

function show(req, res) {
    if (req.body.err) return res.status(500).send({ err });
    if (!req.body.usersB) return res.status(404).send({ message: 'NOT FOUND' })
    let userts = req.body.usersB
     return res.status(200).send({ userts })
    
}


function createUsr(req, res) {
    let usr = new User(req.body);
    usr.save().then(users => res.status(201).send({ users })).catch(err => res.status(500).send({ err }))
}

function update(req, res) {
    if (req.body.err) return res.status(500).send({ err });
    if (!req.body.usersB) return res.status(404).send({ message: 'NOT FOUND' })
    let usrs = req.body.usersB[0];
    usrs = Object.assign(usrs, req.body);
    usrs.save().then(user => res.status(200).send({ message: 'Update', user }))
        .catch(err => res.status(500).send({ err }))

}

function find(req, res, next) {
    let query = {};
    query[req.params.key] = req.params.value;
    User.find(query).then(users => {
        if (!users.length) return next();
        req.body.usersB = users;
        return next();
    }).catch(err => {
        req.body.err = err;
        next();
    })
}

module.exports = {
    index,
    show,
    createUsr,
    update,
    find
}