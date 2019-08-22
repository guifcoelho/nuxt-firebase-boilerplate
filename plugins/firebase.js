const firebase = require('firebase/app');
const config = require('../config/firebase.json');
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
module.exports = firebase;