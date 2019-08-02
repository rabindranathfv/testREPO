export interface Validator {
    name: string;
    validator: any;
    message: string;
}

export interface FieldConfig {
    label?: string;
    name?: string;
    inputType?: string;
    minlength?: number;
    required?: boolean;
    disabled?: boolean;
    typeAttribute?: string;
    options?: string[];
    collections?: any;
    type: string;
    value?: any;
    validations?: Validator[];
}