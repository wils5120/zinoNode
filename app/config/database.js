const mongosee = require('mongoose');
const CONFIG =require('./config');

module.exports = {
    connection: null,
    conect: function(){
        if(this.connection) return this.connection;
        return mongosee.connect(CONFIG.DB, {useNewUrlParser: true, useUnifiedTopology: true}).then(connection => {
            this.connection = connection;
            console.log("ConecciOn a bd exitosa :D"); 
        }).catch(err => {
            console.log(err);
        })
    }
}