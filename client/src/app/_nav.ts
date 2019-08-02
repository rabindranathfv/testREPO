export const navHeader = {
    imgPath: '../../../assets/img/logo-main.png',
    imgMiniPath: '../../../assets/img/logo-symbol.png',
    label: 'Front Base',
    backgroundColor: '#0D71B9',
  };

export const navContent = [
  {
    keyRef: 'Clientes',
    url: '/clientes',
    icon: 'fa fa-users',
  },
  {
    keyRef: 'Usuarios',
    url: '/usuarios',
    icon: 'fa fa-user',
  },
  {
    keyRef: 'Plantas',
    url: '/plantas',
    icon: 'fa fa-industry',
  },
/*   {
    keyRef: 'Plantas - Inversores',
    url: '/plantas-inversores',
    icon: 'fa fa-industry',
  }, */
/*   {
    keyRef: 'Dispositivos',
    url: '/dispositivos',
    icon: 'fa fa-tablet',
  }, */
  {
    keyRef: 'Inversores',
    url: '/inversores',
    icon: 'fa fa-th-large',
  },
  {
    keyRef: 'MPPT',
    url: '/paneles-inversores',
    icon: 'fa fa-bolt',
  },
  {
    keyRef: 'Paneles',
    url: '/paneles',
    icon: 'fa fa-sun-o',
  },
  {
    keyRef: 'Registro asistido',
    url: '/registro-asistido',
    icon: 'fa fa-magic',
  }
];

export const navFooter = {
    icon: '',
    backgroundColor: '#ffff'
  };

export const navAccountMenu = [
  {
    keyRef: 'SolarTracker Administration',
    url: '',
    icon: '',
    type: 'btn',
  },
  {
    keyRef: 'Languages',
    url: '',
    icon: 'fa fa-globe',
    type: 'lang-menu',
    idMenu: 'lang'
  },
  {
    keyRef: 'Cerrar',
    url: '',
    icon: 'fa fa-sign-out ',
    type: 'btn',
  }
];

export const languages = [
  {
    name: 'Español',
    icon: 'flag-icon flag-icon-es',
    code: 'es'
  },
  {
    name: 'English',
    icon: 'flag-icon flag-icon-gb',
    code: 'en'
  },
]