export interface Usuario {
    id?: any;
    nombre?: any;
    apellido_paterno?: any;
    apellido_materno?: any;
    telefono_de_contacto?: any;
    telefono_de_contacto_adicional?: any;
    rut?: any;
    mail?: any;
    password_hash?: any;
    auth_token?: any;
    token_created_at?: any;
    ultima_conexion?: any;
    privilegio?: any;
    preferencia?: any;
    estado_monitoreo_remoto?: any;
    id_usuario_monitor_adicional?: any;
    tiempo_de_monitoreo_remoto?: any;
    id_de_flow?: any;
    pass_de_flow?: any;
    estado_de_pago?: any;
    fecha_ultimo_pago?: any;
    titulo?: any;
    region?: any;
    comuna?: any;
    ciudad?: any;
    calle?: any;
    numero_de_calle?: any;
    numero_de_departamento?: any;
    es_departamento?: any;
    latitud?: any;
    longitud?: any;
    created_at?: any;
    updated_at?: any;
}
const formulario = [
    {name: 'nombre', title: 'Nombre', type: 'text'},
    {name: 'apellido_paterno', title: 'Apellido', type: 'text'},
    {name: 'mail', title: 'Email', type: 'email'},
    {name: 'telefono_de_contacto', title: 'Teléfono', type: 'text'},
    {name: 'rut', title: 'RUT', type: 'text'},
    /* {name: 'estado', title: 'estado', type: 'text'},
    {name: 'habilitado', title: 'habilitado', type: 'text'},
    {name: 'mostrar', title: 'mostrar', type: 'text'}, */
];
export const createUserModel = formulario;
