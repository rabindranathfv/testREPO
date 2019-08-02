export const WizardMockDatas = [
  {
    type: 'stepper',
    name: 'stepper',
    label: 'test stepper',
    inputType: 'string',
    wizard: [
      {
        labelStepper: 'Crear Clientes',
        resource: 'customers',
        fields: [
          {
              label: 'Street Number',
              typeAttribute: 'integer',
              name: 'street_number',
              required: false,
              type: 'input',
              inputType: 'number'
          },
          {
              label: 'Street',
              typeAttribute: 'string',
              name: 'street',
              required: false,
              type: 'input',
              inputType: 'text'
          },
          {
              label: 'City',
              typeAttribute: 'string',
              name: 'city',
              required: false,
              type: 'input',
              inputType: 'text'
          },
          {
              label: 'Commune',
              typeAttribute: 'string',
              name: 'commune',
              required: false,
              type: 'input',
              inputType: 'text'
          },
          {
              label: 'Region',
              typeAttribute: 'string',
              name: 'region',
              required: false,
              type: 'input',
              inputType: 'text'
          },
          {
              label: 'Description',
              typeAttribute: 'text',
              name: 'description',
              required: false,
              type: 'input',
              inputType: 'text'
          },
          {
              label: 'Website',
              typeAttribute: 'string',
              name: 'website',
              required: false,
              type: 'input',
              inputType: 'text'
          },
          {
              label: 'Email',
              typeAttribute: 'string',
              name: 'email',
              required: false,
              type: 'input',
              inputType: 'text'
          },
          {
              label: 'Phone',
              typeAttribute: 'string',
              name: 'phone',
              required: false,
              type: 'input',
              inputType: 'text'
          },
          {
              label: 'Logo',
              typeAttribute: 'string',
              name: 'logo',
              required: false,
              type: 'input',
              inputType: 'text'
          },
          {
              label: 'Name',
              typeAttribute: 'string',
              name: 'name',
              required: false,
              type: 'input',
              inputType: 'text'
          }
        ]
      },
      {
        labelStepper: 'Crear Usuarios',
        resource: 'users',
        fields: [
          {
              label: 'Street Number',
              typeAttribute: 'integer',
              name: 'street_number',
              required: false,
              type: 'input',
              inputType: 'number'
          },
          {
              label: 'Street',
              typeAttribute: 'string',
              name: 'street',
              required: false,
              type: 'input',
              inputType: 'text'
          },
          {
              label: 'City',
              typeAttribute: 'string',
              name: 'city',
              required: false,
              type: 'input',
              inputType: 'text'
          },
          {
              label: 'Commune',
              typeAttribute: 'string',
              name: 'commune',
              required: false,
              type: 'input',
              inputType: 'text'
          },
          {
              label: 'Region',
              typeAttribute: 'string',
              name: 'region',
              required: false,
              type: 'input',
              inputType: 'text'
          },
          {
              label: 'Email',
              typeAttribute: 'string',
              name: 'email',
              required: false,
              type: 'input',
              inputType: 'text'
          },
          {
              label: 'Phone',
              typeAttribute: 'string',
              name: 'phone',
              required: false,
              type: 'input',
              inputType: 'text'
          },
          {
              label: 'Name',
              typeAttribute: 'string',
              name: 'name',
              required: false,
              type: 'input',
              inputType: 'text'
          },
          {
              label: 'CustomerId',
              typeAttribute: 'relation',
              name: 'customer_id',
              required: false,
              type: 'dataselect',
              disabled: true,
              options: [
                  {
                      id: '5d3f17a85f70740d54c416de',
                      label: '416de - Jose'
                  },
                  {
                      id: '5d3f19725f70740d54c416df',
                      label: '416df - asfasf'
                  },
                  {
                      id: '5d3f1aee5f70740d54c416e1',
                      label: '416e1 - Terralink'
                  }
              ]
          }
        ]
      },
      {
        labelStepper: 'Crear Planta',
        resource: 'plants',
        fields: [
          {
              label: 'Startup Date',
              typeAttribute: 'datetime',
              name: 'startup_date',
              required: false,
              type: 'date'
          },
          {
              label: 'Pwr Installed',
              typeAttribute: 'decimal',
              name: 'pwr_installed',
              required: false,
              type: 'input',
              inputType: 'number'
          },
          {
              label: 'Latitude',
              typeAttribute: 'decimal',
              name: 'latitude',
              required: false,
              type: 'input',
              inputType: 'number'
          },
          {
              label: 'Longitude',
              typeAttribute: 'decimal',
              name: 'longitude',
              required: false,
              type: 'input',
              inputType: 'number'
          },
          {
              label: 'Phone',
              typeAttribute: 'string',
              name: 'phone',
              required: false,
              type: 'input',
              inputType: 'text'
          },
          {
              label: 'Street Number',
              typeAttribute: 'integer',
              name: 'street_number',
              required: false,
              type: 'input',
              inputType: 'number'
          },
          {
              label: 'Street',
              typeAttribute: 'string',
              name: 'street',
              required: false,
              type: 'input',
              inputType: 'text'
          },
          {
              label: 'City',
              typeAttribute: 'string',
              name: 'city',
              required: false,
              type: 'input',
              inputType: 'text'
          },
          {
              label: 'Commune',
              typeAttribute: 'string',
              name: 'commune',
              required: false,
              type: 'input',
              inputType: 'text'
          },
          {
              label: 'Region',
              typeAttribute: 'string',
              name: 'region',
              required: false,
              type: 'input',
              inputType: 'text'
          },
          {
              label: 'Name',
              typeAttribute: 'string',
              name: 'name',
              required: false,
              type: 'input',
              inputType: 'text'
          },
          {
              label: 'User',
              typeAttribute: 'relation',
              name: 'user_id',
              required: false,
              type: 'input',
              inputType: 'number'
          }
        ]
      },
      {
        labelStepper: 'Crear Inversor',
        resource: 'inverters',
        fields: [
          {
              label: 'Serie',
              typeAttribute: 'string',
              name: 'serie',
              required: false,
              type: 'input',
              inputType: 'text'
          },
          {
              label: 'Manufacturer',
              typeAttribute: 'string',
              name: 'manufacturer',
              required: false,
              type: 'input',
              inputType: 'text'
          },
          {
              label: 'Datasheet',
              typeAttribute: 'string',
              name: 'datasheet',
              required: false,
              type: 'json',
              inputType: 'text',
              meta: {
                  selectItem: {
                      type: 'select',
                      label: 'Datasheet',
                      name: 'datasheetKey',
                      required: false,
                      options: [
                          'est',
                          'dwq',
                          'test43'
                      ]
                  },
                  areaItem: {
                      type: 'input',
                      inputType: 'text',
                      label: 'Datasheet',
                      typeAttribute: 'string',
                      name: 'datasheetValue',
                      required: false
                  }
              }
          }
        ]
      },
      {
        labelStepper: 'Crear Panel',
        resource: 'panels',
        fields: [
          {
              label: 'Serie',
              typeAttribute: 'string',
              name: 'serie',
              required: false,
              type: 'input',
              inputType: 'text'
          },
          {
              label: 'Manufacturer',
              typeAttribute: 'string',
              name: 'manufacturer',
              required: false,
              type: 'input',
              inputType: 'text'
          },
          {
              label: 'Datasheet',
              typeAttribute: 'string',
              name: 'datasheet',
              required: false,
              type: 'json',
              inputType: 'text',
              meta: {
                  selectItem: {
                      type: 'select',
                      label: 'Datasheet',
                      name: 'datasheetKey',
                      required: false,
                      options: [
                          'test',
                          'power',
                          'v',
                          'a'
                      ]
                  },
                  areaItem: {
                      type: 'input',
                      inputType: 'text',
                      label: 'Datasheet',
                      typeAttribute: 'string',
                      name: 'datasheetValue',
                      required: false
                  }
              }
          }
        ]
      },
      {
        labelStepper: 'Terminar',
        fields: []
      }
    ]
  }
];

export const chartDatas =
        [{
        title: 'Producción de energía de plantas',
        type: 'bar',
        data_url: 'clients/stats/segmentation=gses',
        data: {
                colors: [
                    {
                    backgroundColor: '#E95A15'
                    }
                ],
                datasets: [
                    {
                    label: 'N° Clientes',
                    data: [
                    13364,
                    117882,
                    152147,
                    230313,
                    201078,
                    220
                    ]
                    }
                ],
                options: {
                    tooltips: {
                        enabled: true,
                        mode: 'nearest',
                        intersect: true,
                        title_font_size: 12,
                        body_font_size: 12
                    },
                    legend: {
                        display: false
                    },
                    scales: {
                        x_axes: [
                            {
                                ticks: {
                                    auto_skip: true
                                },
                                display: true,
                                    scale_label: {
                                    label_string: 'GSE',
                                    display: true
                                }
                            }
                        ],
                        y_axes: [
                            {
                                ticks: {
                                    auto_skip: true
                                },
                                display: true,
                                scale_label: {
                                    label_string: 'N° Clientes',
                                    display: true
                                }
                            }
                        ]
                    }
                }
        },
        page_section_position: 4,
        growth_factor: 1,
        labels: [
            'k1',
            'k2',
            'k3',
            'k4',
            'k5',
            'k6'
        ]
}];

export const chartCabinaDetail =
        [{
        type: 'line',
        data: {
                colors: [
                    {
                    backgroundColor: '#E95A15'
                    }
                ],
                datasets: [
                    {
                    label: 'Produccion',
                    data: [
                    13364,
                    117882,
                    152147,
                    230313,
                    201078,
                    220,
                    122234,
                    124314,
                    2147,
                    230313,
                    2147,
                    230313,
                    230313,
                    214887,
                    230313,
                    ]
                    }
                ],
        options: {
                tooltips: {
                    enabled: true,
                    mode: 'nearest',
                    intersect: true,
                    title_font_size: 12,
                    body_font_size: 12
                },
                legend: {
                    display: false
                },
                scales: {
                    x_axes: [
                        {
                            ticks: {
                                auto_skip: true
                            },
                            display: true,
                                scale_label: {
                                label_string: 'GSE',
                                display: true
                            }
                        }
                    ],
                    y_axes: [
                        {
                            ticks: {
                                auto_skip: true
                            },
                            display: true,
                            scale_label: {
                                label_string: 'Produccion',
                                display: true
                            }
                        }
                    ]
                }
            }
        },
        labels: [
            '2:00',
            '3:00',
            '3:00',
            '14:00',
            '16:00',
            '17:00',
            '18:00',
            '22:00',
            '3:00',
            '3:00',
            '14:00',
            '3:00',
            '3:00',
            '14:00',
        ]
}];

export const pieChart = [{
    title: 'Producción de energía de plantas',
    type: 'pie',
    data_url: 'clients/stats/segmentation=gses',
    data: {
            colors: [
                {
                    backgroundColor: ['#E95A15', '#EB0909' , '#1114E8', '#b8a96d', '#1eeea8' ]
                }
            ],
            datasets: [
                {
                label: 'N° Clientes',
                data: [
                113640,
                117882,
                152147,
                230313,
                201078,
                220
                ]
                }
            ],
            options: {
                tooltips: {
                    enabled: true,
                    mode: 'nearest',
                    intersect: true,
                    title_font_size: 6,
                    body_font_size: 6
                },
                legend: {
                    display: false
                }
            }
    },
    category: 'clients',
    segmentation: 'gses',
    page_section_title: 'Económico',
    page_section_position: 4,
    growth_factor: 1,
    labels: [
        'Yellow',
        'Red',
        'Blue',
        'most',
        'aqua'
    ]
}];

export const dynamicFormDatas =

  [  {
        id: 4,
        name: 'Helllo',
        things_name: null,
        id_things: 'Heyyy',
        token_things: 'Holaaaa',
        created_at: '2019-04-25T19:32:23.941Z',
        updated_at: '2019-04-25T19:32:23.941Z',
        thing_type: 'Bonjour',
        plant_id: null
    },
    {
        id: 3,
        name: 'Guten tag',
        things_name: null,
        id_things: 'Bonjourno',
        token_things: 'Ni haooo',
        created_at: '2019-04-25T19:31:08.370Z',
        updated_at: '2019-04-25T19:31:08.370Z',
        thing_type: 'ohayo gosaimasu !',
        plant_id: null
        }, ];
export const createDefinator =

    [
        {
        type: 'input',
        inputType: 'text',
        label: 'Name',
        typeAttribute: 'string',
        name: 'name',
        required: false
        },
        {
        type: 'input',
        inputType: 'text',
        label: 'Things Name',
        typeAttribute: 'string',
        name: 'things_name',
        required: false
        },
        {
        type: 'input',
        inputType: 'text',
        label: 'Thing Type',
        typeAttribute: 'string',
        name: 'thing_type',
        required: false
        },
        {
        type: 'input',
        inputType: 'number',
        label: 'Plant',
        typeAttribute: 'relation',
        name: 'plant_id',
        required: false
        }
    ];

export const mockPlantasDatas = [
    {
        id: 89,
        planta: 'Los Clarines',
        potencia: 200.12,
        rendimiento: 18.02,
        radiacion: 3244.17,
        rendEspecifico: 0.09,
        pr: 30,
        datos: 72,
        ultimaDatos:  89,
        /* url: 'https://www.youtube.com/watch?v=gy1B3agGNxw' */
        actionUrl: 'localhost:4200/centro-control/1/detalles',
        },
        {
        id: 88,
        planta: 'Texinco',
        potencia: 506,
        rendimiento: 18.02,
        radiacion: 2999,
        rendEspecifico: 1,
        pr: 75,
        datos: 59,
        ultimaDatos: 80,
        /* url: 'https://www.youtube.com/watch?v=gy1B3agGNxw' */
        actionUrl: 'localhost:4200/centro-control/2/detalles'
        },
];

export const mockTicketsDatas = [

    {
        planta: 'Los Clarines',
        ultimaModificacion: '17/02/2018',
        ticket: 'AB20507D763',
        designacion: 'Alarma de Inversor (grupo 2)',
        tipoError: 'Alarma del data logger',
        fecha: '17/08/2018',
        estadoError: 'Abierto',
        responsable: 'Abierto',
        causa: 'Abierto'
    },
    {
        planta: 'Los Clarines',
        ultimaModificacion: '17/02/2018',
        ticket: 'AB20507D763',
        designacion: 'Alarma de Inversor (grupo 2)',
        tipoError: 'Alarma del data logger',
        fecha: '17/08/2018',
        estadoError: 'Abierto',
        responsable: 'Abierto',
        causa: 'Abierto'
    },
];


export const mockReportsDatas = [

  {
      nombre: 'Reporte 1',
      fechaElaboracion: '17/02/2018',
      tamanoArchivo: '1Mb',
  },
  {
    nombre: 'Reporte 2',
    fechaElaboracion: '17/02/2019',
    tamanoArchivo: '2Mb',
},
{
  nombre: 'Reporte 3',
  fechaElaboracion: '17/02/2019',
  tamanoArchivo: '2Mb',
},
{
  nombre: 'Reporte 4',
  fechaElaboracion: '17/02/2019',
  tamanoArchivo: '2Mb',
},
{
    nombre: 'Reporte 5',
    fechaElaboracion: '17/02/2019',
    tamanoArchivo: '2Mb',
},
];


export const prodEnergyDatas =
        [{
        type: 'line',
        data: {
                colors: [
                    {
                    borderColor: '#DD9A22',
                    fill: false
                    },
                    {
                    borderColor: '#E95A15',
                    fill: false
                    }
                ],
                datasets: [
                    {
                    label: 'Potencia',
                    data: [
                    13364,
                    117882,
                    152147,
                    230313,
                    201078,
                    220,
                    122234,
                    124314,
                    2147,
                    230313,
                    2147,
                    230313,
                    230313,
                    214887,
                    230313,
                    ]
                    },
                    {
                    label: 'Insolacíon',
                    data: [
                    554,
                    4245,
                    42455,
                    213515,
                    534324,
                    51422,
                    21213,
                    21321,
                    21321,
                    21321,
                    21321,
                    21321,
                    21321,
                    21321,
                    21321,
                    ]
                    }
                ],
        options: {
                tooltips: {
                    enabled: true,
                    mode: 'nearest',
                    intersect: true,
                    title_font_size: 12,
                    body_font_size: 12
                },
                legend: {
                    display: true,
                    position: 'bottom'
                },
                scales: {
                    x_axes: [
                        {
                            ticks: {
                                auto_skip: true
                            },
                            display: true,
                                scale_label: {
                                label_string: 'GSE',
                                display: true
                            }
                        }
                    ],
                    y_axes: [
                        {
                            ticks: {
                                auto_skip: true
                            },
                            display: true,
                            scale_label: {
                                label_string: 'Produccion',
                                display: true
                            }
                        }
                    ]
                }
            }
        },
        labels: [
            '2:00',
            '3:00',
            '3:00',
            '14:00',
            '16:00',
            '17:00',
            '18:00',
            '22:00',
            '3:00',
            '3:00',
            '14:00',
            '3:00',
            '3:00',
            '14:00',
        ]
}];


export const datasPlantasScheme = [
    { planta: 'Los Clarines', actu: '-', day: new Date(1995, 11, 17), normal: '-'},
    { planta: 'Los Clarines', actu: '-', day: new Date(2013, 5, 18), normal: '-'},
    { planta: 'Los Clarines', actu: '-', day: new Date(2006, 2, 19), normal: '-'},
    { planta: 'Los Clarines', actu: '-', day: new Date(1996, 1, 18), normal: '-'}
  ];

export const columnPlantasScheme = [
    {headerName: 'Planta', field: 'planta', sortable: true, filter: true, suppressSizeToFit: true},
    {headerName: 'Actual', field: 'actu', sortable: true, filter: true},
    {headerName: 'Día', field: 'day', sortable: true, filter: 'agDateColumnFilter', filterParams: {
        comparator(filterLocalDateAtMidnight, cellValue) {
            const dateAsString = cellValue;
            const dateParts  = dateAsString.split('/');
            const cellDate = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));

            if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
                return 0;
            }

            if (cellDate < filterLocalDateAtMidnight) {
                return -1;
            }

            if (cellDate > filterLocalDateAtMidnight) {
                return 1;
            }
        }
    }
},
    {headerName: 'Normalizado', field: 'normal', sortable: true, filter: true, suppressSizeToFit: true},
];

export const datasTicketsResume = [
    { select: '',
    state: {label: '', icon: { name: 'fa fa-check-circle', color: 'rgb(150, 223, 115)'}},
    modifDate: { label: '17/02/2019 16:00', icon: { name: 'fa fa-trash', color: ''}},
    ticket: 'AB20507D763',
    designation: 'Alarma de Inversor (grupo 2)',
    errorType: 'Alarma del data logger',
    planta: 'Los Clarines',
    date: '17/08/2019',
    errorStatus: 'Abierto',
    responsable: 'Abierto',
    cause: 'Abierto',
    delete: ''},
    ];

export const columnTicketsResume = [
    {headerName: '', field: 'select', checkboxSelection: true, suppressSizeToFit: true},
    {headerName: '', cellRenderer: 'iconCellCustomized', field: 'state'},
    {headerName: 'Última modificatión', cellRenderer: 'iconCellCustomized', field: 'modifDate'},
    {headerName: 'Ticket', field: 'ticket', sortable: true, filter: true },
    {headerName: 'Designación', field: 'designation', sortable: true, filter: true },
    {headerName: 'Tipo de Error', field: 'errorType', sortable: true, filter: true },
    {headerName: 'Planta', field: 'planta', sortable: true, filter: true, },
    {headerName: 'Fecha', field: 'date', sortable: true, filter: true },
    {headerName: 'Estado de Error', field: 'errorStatus', sortable: true, filter: true},
    {headerName: 'Responsable', field: 'responsable', sortable: true, filter: true, },
    {headerName: 'Causa', field: 'cause', sortable: true, filter: true, },
    {headerName: '', cellRenderer: 'btnCellCustomized', field: 'delete', suppressSizeToFit: true},
  ];

export const mockTreeMenuData = [
    {
      name: 'Planta',
      children: [
        {name: 'Producción de Energía', children: [
          {name: 'Producción de Energía'},
          {name: 'Potencia Solar'},
          {name: 'Comparacion de Valores'},
        ]},
        {name: 'Potencia Solar'},
        {name: 'Comparacion de Valores'},
      ]
    },
    {
      name: 'Análisis',
      children: [
        {
          name: 'Análisis',
          children: [
            {name: 'Eficiencia de La Planta'},
            {name: 'Input/Output'},
            {name: 'Mapa de Calor Inversor'},
          ]
        },
        {
          name: 'Análisis',
          children: [
            {name: 'Energía'},
            {name: 'Indice de Potencia'},
            {name: 'Indice de Rendimiento'},
            {name: 'Disponibilidad de Plantas'},
          ]
        },
      ]
    },
    {
        name: 'Power Control',
        children: [
          {name: 'Control de Potencia Efectiva'},
        ]
    },
    {
        name: 'Inversores',
        children: [
          {name: 'Energía'},
          {name: 'Energinormalizada'},
          {name: 'PR Inversores'},
          {name: 'Potencia AC'},
          {name: 'Energía'},
          {name: 'Energinormalizada'},
          {name: 'PR Inversores'},
          {name: 'Potencia AC'},
        ]
    },
    {
        name: 'Sensores',
        children: [
          {name: 'Generador de Diagramas'},
        ]
    },
    {
        name: 'Definido por el usuario',
        children: [
          {name: 'Generador de Diagramas'},
        ]
    },
  ];

export const dataTabsEvaluation = [
    {
      name: 'Calculación',
      headers: ['', 'Valores diarios Unidad', 'Valor Máximo Unidad'],
      data: [
        {
          title: 'Suma de Radiación',
          dairyValue: '11,80 kWh/m',
          maxValue: '927,93 W/m'
        },
        {
          title: 'Energía',
          dairyValue: '185,80 kWh/m',
          maxValue: '81,93 kW'
        },
        {
          title: 'Energía Especifica',
          dairyValue: '0,93 kWh',
          maxValue: ''
        },
        {
          title: 'Potencia Normal',
          dairyValue: '11,80 kWh/m',
          maxValue: ''
        },
      ]
   },
   {
      name: 'Datos',
      headers: ['', 'Valores', 'Unidad'],
      data: [],
    },
  ];

export const stateValuesIndicator = ['70,42', '912,29', '102,16'];

export const detailsCabinaView = [
    {
      title: 'Nombre de Planta',
      text: 'Los Clarines',
    },
    {
      title: 'Cliente',
      text: 'Nombre Cliente',
    },
    {
      title: 'Potencia Instalada',
      text: '200,12 kwP',
    },
    {
      title: 'Cantidad de Paneles',
      text: '100',
    },
    {
      title: 'Puesta en Servicio',
      text: '17 de Marzo 2018',
    },
    {
      title: 'Inversor',
      text: '6x TRIQ-27.6-TLOUTD',
    },
    {
      title: 'Módulos',
      text: '616 x GCL Power GCL-P&/72 325',
    },
    {
      title: 'Cantidad',
      text: '100',
    },
  ];

export const monitorTableCabina = [
    {
      title: 'Comparacion de Energia de Los Inversores',
      active: 1,
    },
    {
      title: 'Comparacion de Contadores',
      active: 0,
    },
    {
      title: 'Alarma de Sistema',
      active: 0,
    },
    {
      title: 'Inversor',
      active: 1,
    },
    {
      title: 'Comparacion de Energia de Los Inversores',
      active: 1,
    },
    {
      title: 'Comparacion de Contadores',
      active: 0,
    },
    {
      title: 'Alarma de Sistema',
      active: 0,
    },
    {
      title: 'Inversor',
      active: 1,
    },
  ];

export const columnsConfigTicketTable = [
    {
      name: 'ultimaModificacion',
      displayName: 'Última Modificación',
      type: 'center-cell',
    },
    {
      name: 'ticket',
      displayName: 'Ticket',
      type: 'center-cell',
    },
    {
      name: 'designacion',
      displayName: 'Designación',
      type: 'center-cell',
    },
    {
      name: 'tipoError',
      displayName: 'Tipo de Error',
      type: 'center-cell',
    },
    {
      name: 'planta',
      displayName: 'Planta',
      type: 'center-cell',
    },
    {
      name: 'fecha',
      displayName: 'Fecha',
      type: 'center-cell',
    },
    {
      name: 'estadoError',
      displayName: 'Estado de error',
      type: 'center-cell',
    },
    {
      name: 'responsable',
      displayName: 'Responsable',
      type: 'center-cell',
    },
    {
      name: 'causa',
      displayName: 'Causa',
      type: 'center-cell',
    },
  ];

export const columnsConfigReport = [
    {
      name: 'nombre',
      displayName: 'Nombre',
      type: 'center-cell',
    },
    {
      name: 'fechaElaboracion',
      displayName: 'Fecha de Elaboración',
      type: 'center-cell',
    },
    {
      name: 'tamanoArchivo',
      displayName: 'Tamaño del Archivo',
      type: 'center-cell',
    },
  ];

export const detailsInvestorView = [
    {
      title: 'Potencia Instalada',
      text: '200,12 kwP',
    },
    {
      title: 'Ubicacion',
      text: 'Los Clarines',
    },
    {
      title: 'Cliente',
      text: 'Nombre Cliente',
    },
    {
      title: 'Cantidad de Paneles',
      text: '100',
    },
    {
      title: 'Puesta en Servicio',
      text: '17 de Marzo 2018',
    },
    {
      title: 'Inversor',
      text: '6x TRIQ-27.6-TLOUTD',
    },
    {
      title: 'Módulos',
      text: '616 x GCL Power GCL-P&/72 325',
    },
  ];
