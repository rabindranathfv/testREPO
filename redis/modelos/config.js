// const client = (require('../client'));
const flat = require('../../helpers/flatObject');
const { encode, decode } = require('../../helpers/encodeDecode');
const modelo = 'config:'

function save(id, data, callback) {
    const key = encode(`${id}`);
    // console.log(flat(data));
    return client.hmset(`${modelo}${key}`, flat(data), callback);
}
function read(id, callback) {
    const key = decode(`${id}`);    
    return client.hgetall(`${modelo}${key}`, callback)
}



let config = [
    {
      cols: 2,
      rows: 2,
      color: 'white',
      component: 'MedidorComponent',
      variable: 'ink_temperature',
      // text: 'STATUS',
      params: {
        title: 'Temperatura',
        subtitle: 'ink_temperature',
        symbol: '°',
        value: -1,
        medidor: 'bar',
        // valueSubscription: new BehaviorSubject(-1),
      }
    },
    {
      cols: 2,
      rows: 2,
      color: 'white',
      component: 'MedidorComponent',
      variable: 'electronic_temperature',
      // text: 'STATUS',
      params: {
        title: 'Electrónica',
        subtitle: 'electronic_temperature',
        symbol: '°',
        value: -1,
        medidor: 'bar',
        // valueSubscription: new BehaviorSubject(-1),
      }
    },
    {
      cols: 2,
      rows: 2,
      color: 'white',
      component: 'MedidorComponent',
      variable: 'Aditivo',
      // text: 'STATUS',
      params: {
        title: 'additive_cartridge',
        subtitle: 'additive_cartridge',
        symbol: 'CC',
        // value: -1,
        medidor: 'bar',
        // valueSubscription: new BehaviorSubject(-1),
      }
    },
    {
      cols: 2,
      rows: 8,
      color: 'white',
      component: 'ScrollListComponent',
      variable: 'logs',
      // text: 'STATUS',
      params: {
        title: 'Registros',
        // subtitle: 'solvente añadido',
        // symbol: 'CC',
        // value: -1,
        // medidor: 'bar',
        // valueSubscription: new BehaviorSubject(-1),
      }
    },
    {
      cols: 2,
      rows: 2,
      color: 'white',
      component: 'MedidorComponent',
      variable: 'tank_ink_level',
      // text: 'STATUS',
      params: {
        title: 'Nivel de tinta',
        subtitle: 'tank_ink_level',
        symbol: '',
        value: -1,
        medidor: 'bar',
        // valueSubscription: new BehaviorSubject(-1),
      }
    },
    {
      cols: 2,
      rows: 2,
      color: 'white',
      component: 'MedidorComponent',
      variable: 'solvent_added',
      // text: 'STATUS',
      params: {
        title: 'Solvente',
        subtitle: 'solvent_added',
        symbol: 'CC',
        value: -1,
        medidor: 'bar',
        // valueSubscription: new BehaviorSubject(-1),
      }
    },
    {
      cols: 2,
      rows: 2,
      color: 'white',
      component: 'MedidorComponent',
      variable: 'additive_pump_pressure',
      // text: 'STATUS',
      params: {
        title: 'Presión aditivos',
        subtitle: 'additive_pump_pressure',
        symbol: '',
        value: -1,
        medidor: 'bar',
        // valueSubscription: new BehaviorSubject(-1),
      }
    },
    {
      cols: 1,
      rows: 1,
      color: 'white',
      // component: 'MedidorComponent',
      variable: 'time_left_ink',
      //text: 'STATUS',
      component: 'ContadorComponent',
      params: {
        time: true,
        text: 'Tiempo de tinta:'
        // valueSubscription: new BehaviorSubject(-1),
      }
    },
    {
      cols: 1,
      rows: 1,
      color: 'white',
      // component: 'MedidorComponent',
      variable: 'list_faults_warnings_cf',
      //text: '0',
      component: 'ContadorComponent',
      params: {
        time: false,
        text: 'Fallos: '
        // valueSubscription: new BehaviorSubject(-1),
      }
    },
    {
      cols: 4,
      rows: 4,
      color: 'white',
      component: 'PanelComponent',
      // variable: '',
      // text: 'STATUS',
      params: {
        title: 'Solvente',
        subtitle: 'solvente añadido',
        symbol: 'CC',
        value: -1,
        medidor: 'bar',
        // valueSubscription: new BehaviorSubject(-1),
      }
    },
    {
      cols: 2,
      rows: 1,
      color: 'white',
      //component: 'ButtonComponent',
      variable: 'jet_status',
      component: 'ContadorComponent',
      // text: 'STATUS',
      params: {
        // text: 'btn',
        color: 'light'
        // valueSubscription: new BehaviorSubject(-1),
      }
    },
    {
      cols: 2,
      rows: 1,
      color: 'white',
      component: 'ButtonComponent',
      // text: 'STATUS',
      width: '100%',
      height: '100%',
      params: {
        text: 'Temperatura',
        color: 'info'
        // valueSubscription: new BehaviorSubject(-1),
      }
    },
    {
      cols: 2,
      rows: 1,
      color: 'white',
      component: 'ListArrayComponent',
      width: '100%',
      height: '100%',
      params: {
        title: 'PLUGPLAY ADDITIVES',
        item: 'Additive: '
      },
      variable: 'plug_play_additives'
    },

  ]
module.exports = (client => {
  function save(id, data, callback) {
    const key = encode(`${id}`);
    // console.log(flat(data));
    return client.hmset(`${modelo}${key}`, flat(data), callback);
  }
  save('default', config);
  
})
/* 
module.exports = {
  save,
  read,
  run: save('default', config)
} */