const { encode, decode } = require('../../helpers/encodeDecode');
const flat = require('../../helpers/flatObject');
module.exports = ( client => {
    /// console.log(client);
    const alertas = {
        nombre: 'Nivel de tinta',
        condiciones: [
            {
                variable: 'tank_ink_level',
                text: 'Nivel de tinta en tanque',
                comparador: 'menor que',
                simbolo: '<',
                valor: 25

            }
        ]
    };
    
    const key = encode(`alertas:default`);
    client.hmset(key, flat(alertas), (error, response) => {
        /* console.log(error);
        console.log(response); */
        
        
    })
    client.hmset(key+1, flat(alertas), (error, response) => {
        /* console.log(error);
        console.log(response); */
        
        
    })
})