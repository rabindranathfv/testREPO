function flat( obj ) {
    console.log('flat');
    
    console.log(obj);
    
    const respuesta = [];
    const keys = Object.keys(obj);
    for (let index = 0; index < keys.length; index++) {
        const key = keys[index];
        let element = obj[key];
        if (typeof element === 'object') {
            element = JSON.stringify(element)
        }
        respuesta.push(key, element)
    }
    
    return respuesta
}
module.exports = flat;