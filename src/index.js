import express from 'express';
import ejs from 'ejs';
import bodyParser from 'body-parser';
import session from 'express-session';
import flash from 'connect-flash';
import mapsCtrl from "./controllers/maps";
import authCtrl from "./controllers/auth";
import db from '../models';

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
  secret:'erqewfp;adslfjaew.rqe;d@#@#$afjqew;l',
  resave: false,
  saveUninitialized: true
}));

app.use(flash());

// custom middleware - is user logged in?
app.use( (req, res, next) => {
  req.getUser = () => {
    return req.session.user || false;
  };
  next();
})

// get logged-in user info
app.use( (req, res, next) => {
  res.locals.loggedIn = req.getUser();
  next();
})

//custom middleware for alerts
app.use( (req, res, next) => {
  res.locals.alerts = req.flash();
  next();
})

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use("/maps", mapsCtrl);
app.use("/auth", authCtrl);

app.get('/', (req, res) => {
 res.render('index');
});


app.listen(process.env.PORT || 3000, () => {
  console.log("Server started ...")
})

export default app;