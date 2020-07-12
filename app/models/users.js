const mongoose = require('mongoose');

const userShema = new mongoose.Schema({
    cedula: {
        type: Number,
    },
    name: {
        type: String,
        required: true,
    },
    monto: {
        type: Number,
        required: true
    },
    fecha: Date,
    estado: {
        type: Boolean,
        default: null
    },
    correo: {
        type: String,
        required: true
    },
    pago: {
        type: Boolean,
        default: false
    },
    cc:{
        type:Number
    }
})

const User = mongoose.model('User', userShema );

module.exports = User    