/**
 * Sets up the admin environment
 */
const firebaseConfig = require('./nuxt.config.js').env.firebaseConfig;
process.env = {
    ...process.env,
    ...firebaseConfig
}

//Comment code below if you do not want to run seed with admin
const firebase = require('firebase-admin');
firebase.initializeApp({
    credential: firebase.credential.applicationDefault()
});
process.firebase = firebase;


/**
 * Now, require and run seeders
 */

// const TemplateModel = require('~app/models/TemplateModel.js');
// TemplateModel.count().then(qtd=>{
//     if(qtd === 0){
//         require('./TemplateSeeder.js')();
//     }
// });