export interface Validator {
    name: string;
    validator: any;
    message: string;
}

export interface MetaJson {
    selectItem: {
        type?: string;
        label: string,
        name?: string,
        required?: boolean,
        options?: string[];
     };
     areaItem: {
        type?: string;
        inputType?: string;
        label?: string;
        typeAttribute?: string;
        name?: string;
        required?: boolean,
      };
}

export interface Stepper {
    labelStepper?: string;
    resource?: string;
    fields: FieldConfig;
}

export interface FieldConfig {
    type: string;
    label?: string;
    name?: string;
    inputType?: string;
    minlength?: number;
    required?: boolean;
    disabled?: boolean;
    typeAttribute?: string;
    options?: string[];
    collections?: any;
    value?: any;
    validations?: Validator[];
    meta?: MetaJson;
    wizard?: Stepper[];
    idRelated?: string;
}

