import firebase from 'firebase'
const personalSiteConfig = {
    apiKey: "AIzaSyAf-9eT4W8ouyrYs20yGuP3ixIQsv9LUy0",
    authDomain: "personalsite-8e240.firebaseapp.com",
    databaseURL: "https://personalsite-8e240.firebaseio.com",
    storageBucket: "personalsite-8e240.appspot.com",
    messagingSenderId: "108249662527"
  };

const bovadaBotConfig = {
  apiKey: "AIzaSyBQ98WoiglUpzF3cnOj3SB2awu3xyo0Mno",
  authDomain: "bovadabot.firebaseapp.com",
  databaseURL: "https://bovadabot.firebaseio.com",
  projectId: "bovadabot",
  storageBucket: "bovadabot.appspot.com"
}

export const personalSiteFirebase = firebase.initializeApp(personalSiteConfig, 'personalsite')
export const bovadaBotFirebase = firebase.initializeApp(bovadaBotConfig, 'bovadabot')