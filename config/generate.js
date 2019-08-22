/*
Gera os arquivos de configuração a partir das variáveis de ambiente.

Se a variável APP_ENV for igual a 'production', então será buscado o arquivo
sem extensão.

Caso contrário, buscaremos o arquivo: 
`~config/[service]/build.[APP_ENV].js`
*/

//Obtém o ambiente da aplicação
const env = require('./nuxt-config.js').env;
const appEnv = env.appEnv == 'production' ? '' : env.appEnv;

/*
Carrega os arquivos js de configuração com orientação de quais
variáveis de ambiente utilizar
*/
const config = {
    firebase: require(`./config/firebase/build.${appEnv}.js`),
    //Inclua novos serviços aqui...
}

//Gera os arquivos fixos de configuração
const fs = require('fs');
for(const service in config){
    const json = JSON.stringify(config[service]);
    fs.writeFile(`./config/${service}.json`, json, 'utf8', err=>{
        if(err) throw err;
        console.log('Arquivos de configuração gerados');
    });
}