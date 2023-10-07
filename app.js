const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const morgan = require('morgan');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');


const app = express();

// EJS como motor de plantilla
app.set('view engine', 'ejs');

app.set('views', [
  path.join(__dirname, './views')
]);

// middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(morgan('tiny'));
app.use(cookieParser());
app.use(expressSession({ secret: 'este es mi secreto monito123' }));

app.use((req, res, next) => {
  if(req.cookies.email){
      const userModel = require('./models/user');

      const user = userModel.findByEmail(req.cookies.email);

      delete user.id;
      delete user.password;

      req.session.user = user;
  }

  next();
});

// requiriendo las rutas
const homeRoutes = require('./routes/homeRoutes');
const loginRoutes = require('./routes/loginRoutes');
const registerRoutes = require('./routes/registerRoutes');

// definiendo las rutas
app.use('/', homeRoutes); // Ruta raíz
app.use('/login', loginRoutes); // Ruta para el login
app.use('/register', registerRoutes); // Ruta para el registro

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
