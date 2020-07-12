const Bank = require('../models/bank');


function index(req, res) {
    Bank.find({}).then(bank => {
        if (bank.length) return res.status(200).send({ bank });
        return res.status(204).status({ message: 'Not content' });
    }).catch(err => res.status(500).send({ err }));
};



function update(req, res) {
    if (req.body.err) return res.status(500).send({ err });
    if (!req.body.banksB) return res.status(404).send({ message: 'NOT FOUND' })
    let bankP = req.body.banksB[0];
    bankP = Object.assign(bankP, req.body);
    bankP.save().then(banks => res.status(200).send({ message: 'Update', banks }))
        .catch(err => res.status(500).send({ err }))
}

function createBank(req, res) {
    let bnk = new Bank(req.body);
    bnk.save().then(banks => res.status(201).send({ banks })).catch(err => res.status(500).send({ err }))
}

function find(req, res, next) {
    let query = {};
    query[req.params.key] = req.params.value;
    Bank.find(query).then(banks => {
        if (!banks.length) return next();
        req.body.banksB = banks;
        return next();
    }).catch(err => {
        req.body.err = err;
        next();
    })
}

module.exports = {
    index,
    update,
    find,
    createBank
}