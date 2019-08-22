const BaseModel = require('@guifcoelho/firestore-model');

const table = "articles";

const schema = {
    title: { type: 'string' },
    link: { type: 'string' },
    date: { type: 'Date|Timestamp' }
}

const timestamps = true;

module.exports = class PublicacaoModel extends BaseModel {

    constructor(data){
        super(table, data, schema, timestamps);
    }

}