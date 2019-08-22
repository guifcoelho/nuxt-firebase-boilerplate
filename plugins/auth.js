const firebase = require('./firebase.js');
require('firebase/auth');

module.exports = context => {
    const { store, redirect, route } = context;
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                return resolve(store.commit('auth/setUser', user));
            }
            return resolve();
        })
    });
};