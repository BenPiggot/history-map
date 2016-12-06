import express from 'express';
import ejs from 'ejs';
import bodyParser from 'body-parser';


const app = express();
const router = express.Router();

console.log(__dirname)
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/public"));


app.get('/', (req, res) => {
 res.render('index');
});



app.listen(process.env.PORT || 3000, () => {
  console.log("Server started ...")
})

export default app;