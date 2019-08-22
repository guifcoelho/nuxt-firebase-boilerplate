// const firebase = require('../../plugins/firebase.js');
// require('firebase/auth');

// export const state = () => ({
//     user: null,
//     email: null
// })

// export const mutations = {
//   setUser (state, user) {
//     if(user){
//       state.user = user.uid;
//       state.email = user.email;
//     }else{
//       state.user = null;
//       state.email = null;
//     }
//   }
// }

// export const actions = {
//   emailSignIn({commit}, payload){
//     return new Promise(async (resolve, reject)=>{
//       let error = null;
//       await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
//         .catch(e=>{
//           error = e;
//         });
//       error ? reject() : resolve();
//     })
//   },

//   async signOut({commit}){
//     await firebase.auth().signOut()
//       .then(()=>{
//         commit('setUser', null);
//       })
//       .catch(e=>{
//         console.log(e);
//       })
//   }

// }