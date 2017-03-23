import { app } from './server'
import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyAf-9eT4W8ouyrYs20yGuP3ixIQsv9LUy0",
    authDomain: "personalsite-8e240.firebaseapp.com",
    databaseURL: "https://personalsite-8e240.firebaseio.com",
    storageBucket: "personalsite-8e240.appspot.com",
    messagingSenderId: "108249662527"
  };

firebase.initializeApp(config)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log('Listening on port %s', PORT)
})