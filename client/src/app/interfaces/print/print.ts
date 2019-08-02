export interface Print {
    id?: any;
    atributo?: any;
    serie?: any;
    tipo?: any;
    codigo?: any;
    clase?: any;
    topic?: any;
    numero?: any;
    sector?: any;
    ubicacion?: any;
    zona?: any;
    nombre?: any;
    estado?: any;
    estado_alerta?: any;
    habilitado?: any;
    energia?: any;
    valor?: any;
    mostrar?: any;
    ultima_activacion?: any;
    speed?: any;
    pressure?: any;
    viscosity?: any;
    tank_ink_level?: any;
    solvent_added?: any;
    electronic_temperature?: any;
    ink_temperature?: any;
    head_temperature?: any;

    ink_circuit_solenoid_valve_state?: any;
    head_solenoid_valve_state?: any;

    ink_task_phase?: any;
    ink_task_sub_phase?: any;
    tube_task_phase?: any;
    tube_task_sub_phase?: any;
    motor_task_phase?: any;
    jet_speed?: any;
    number_printing_phase?: any;
    viscosity_target?: any;
    offset_sensor_level?: any;
    beginning_measurement_time?: any;
    break_of_time?: any;
    current_tube_level?: any;
    piezo_target?: any;
    ckmax?: any;
    ckmin?: any;
    recup_level?: any;
    tht_target?: any;
    priting_state?: any;
    total_additive_consumption?: any;
    tank_additive_quantity?: any;
    time_left_ink?: any;
    viscosity_management_state?: any;
    average_ink_consumption?: any;
    pressure_target?: any;
    speed_motor_target?: any;
    ink_autonomy_display?: any;
    additive_cartridge?: any;
    additive_pump_pressure?: any;
    ink_circuit_fault?: any;
    print_head_faults?: any;
    printing_faults?: any;
    ink_circuit_warnings?: any;
    print_head_warnings?: any;
    printing_warnings?: any;
    jet_status?: any;
    printing_counter_value?: any;
    number_of_records?: any;
    fault_number?: any;
    time_date_notification_day_month_years_hours_minute?: any;
    phase_detection?: any;
    motor_speed?: any;
    motor_speed_target?: any;
    pomp_pressure?: any;
    pomp_pressure_target?: any;
    hardware_temperature?: any;
    number_faults_warnings?: any;
    list_faults_warnings?: any;
    hub_id?: any;
    created_at?: any;
    updated_at?: any;
}
const formulario = [
    // {title: 'Serie', name: 'nombre', type: 'text'},
    // {name: 'id', title: 'id', type: 'text'},
    // {name: 'atributo', title: 'atributo', type: 'text'},
    {name: 'serie', title: 'serie', type: 'text'},
    // {name: 'tipo', title: 'tipo', type: 'text'},
    {name: 'codigo', title: 'codigo', type: 'text'},
    // {name: 'clase', title: 'clase', type: 'text'},
    // {name: 'topic', title: 'topic', type: 'text'},
    // {name: 'numero', title: 'numero', type: 'text'},
    // {name: 'sector', title: 'sector', type: 'text'},
    {name: 'ubicacion', title: 'ubicacion', type: 'text'},
    // {name: 'zona', title: 'zona', type: 'text'},
    {name: 'nombre', title: 'nombre', type: 'text'},
    {name: 'estado', title: 'estado', type: 'text'},
    // {name: 'estado_alerta', title: 'estado_alerta', type: 'text'},
    {name: 'habilitado', title: 'habilitado', type: 'text'},
    // {name: 'energia', title: 'energia', type: 'text'},
    // {name: 'valor', title: 'valor', type: 'text'},
    {name: 'mostrar', title: 'mostrar', type: 'text'},
    // {name: 'ultima_activacion', title: 'ultima_activacion', type: 'text'},
    // {name: 'hub_id', title: 'hub_id', type: 'text'},
    // {name: 'created_at', title: 'created_at', type: 'text'},
    // {name: 'updated_at', title: 'updated_at', type: 'text'},
];

/* export {
    interface: Print,
    modelo: formulario
} */
export const createPrintModel = formulario;
