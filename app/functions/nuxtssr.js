const { Nuxt } = require("nuxt");
const functions = require("firebase-functions");
const app = require("express")();


const nuxt = new Nuxt({
	dev: false,
	buildDir: 'nuxt_build', //Caminho a partir da localização do index.js do firebase functions
	build: {
		publicPath: '/assets/'
	}
});

app.get('*', (request, response) => {
	response.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
	nuxt.renderRoute('/').then(result => {
		response.send(result.html)
	}).catch(e => {
		response.send(e)
	});
});

exports.nuxtssr = functions.https.onRequest(app);