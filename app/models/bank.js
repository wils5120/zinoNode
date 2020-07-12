const mongoose = require('mongoose');

const bankShema = new mongoose.Schema({
    Monto: {
        type: Number,
    },
    bankName: {
        type:String,
    }
})

const Bank = mongoose.model('bank', bankShema );

module.exports = Bank;