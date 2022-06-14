const express = require('express');
const morgan = require('morgan');

const app = express();

// configuraciones
app.set('port', process.env.PORT || 5000);
app.set('json spaces' , 2)


// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//ROUTS
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/user', require('./routes/user'));







// Iniciando el server
// app.listen(3000, () => {
//     console.log(`SERVER ON PORT ${3000}`);
// })
app.listen(app.get('port'), () => {
    console.log(`SERVER ON PORT ${app.get('port')}`);
})