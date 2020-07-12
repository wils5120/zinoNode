const Database = require('./app/config/database');
const CONFIG = require('./app/config/config');
const App = require('./app/app');

Database.conect();

App.listen(CONFIG.PORT, (err) => {
    if(err) return console.log(err);
    console.log("servidor listo para usar");
})