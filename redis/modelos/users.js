const client = (require('../client'));
const flat = require('../../helpers/flatObject');
const { encode, decode } = require('../../helpers/encodeDecode');
const modelo = 'user:'

function save(id, data, callback) {
    const key = encode(`${id}`);
    return client.hmset(`${modelo}${key}`, flat(data), callback);
}
function read(id, callback) {
    const key = decode(`${id}`);    
    return client.hgetall(`${modelo}${key}`, callback)
}

module.exports = {
    save,
    read
}
