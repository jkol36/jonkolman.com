import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import {
  bovadaBotFirebase,
 personalSiteFirebase
} from './config'

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
    personalSiteFirebase.database().ref('personalSite').child('LandingPageViews').transaction(currentVal => currentVal + 1, () => {
    })
    res.render('index.html');
});

app.get('/bovadabot', (req, res) => {
  bovadaBotFirebase
    .database()
    .ref('profiles')
    .child('101412113')
    .once('value', s => {
      let data = {}
      if(s.exists()) {
        Object.keys(s.val()).map(k => {
          if(k !== 'openBets' && k !== 'closedbets') {
            data[k] = s.val()[k]
          }
        })
        return res.render('bovadabot.html', {data})
      }
      else {
        return res.render('bovadabot.html', {data: 'not found'})
      }
    })
})

app
.get('/ernbot', (req, res) => {
  bovadaBotFirebase
  .database()
  .ref('profiles')
  .child('4417540')
  .once('value', s => {
    let data = {}
    if(s.exists()) {
      Object.keys(s.val()).map(k => {
        if(k !== 'openBets' && k !== 'closedbets') {
            data[k] = s.val()[k]
        }
      })
        return res.render('bovadabot.html', {data})
    }
    else {
      return res.render('bovadabot.html', {data: 'not found'})
    }
  })
})

app
.get('/isaacbot', (req, res) => {
  bovadaBotFirebase
  .database()
  .ref('profiles')
  .child('101793173')
  .once('value', s => {
    let data = {}
    if(s.exists()) {
      Object.keys(s.val()).map(k => {
        if(k !== 'openBets' && k !== 'closedbets') {
            data[k] = s.val()[k]
        }
      })
      return res.render('bovadabot.html', {data})
    }
    else {
      return res.render('bovadabot.html', {data: 'not found'})
    }
  })
})

app
.get('/curlybot', (req, res) => {
  bovadaBotFirebase
  .database()
  .ref('profiles')
  .child('10232765')
  .once('value', s => {
    let data = {}
    if(s.exists()) {
      Object.keys(s.val()).map(k => {
        if(k !== 'openBets' && k !== 'closedbets') {
            data[k] = s.val()[k]
        }
      })
      return res.render('bovadabot.html', {data})
    }
    else {
      return res.render('bovadabot.html', {data: 'not found'})
    }
  })
})



