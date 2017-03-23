import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import firebase from 'firebase'

export const app = express()

app.set('views', './views')
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());



app.get('/', function(req, res){
    firebase.database().ref('personalSite').child('LandingPageViews').transaction(currentVal => currentVal + 1, () => {
      console.log('done')
    })
    res.render('index.html');
});




