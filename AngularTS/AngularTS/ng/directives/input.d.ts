module angular {
    interface NgModelController {
        $viewValue: string;
        $modelValue: any;
        $parsers: ModelParser[];
        $formatters: ModelFormatter[];
        $viewChangeListeners: Function[];
        $error: any;
        $pristine: bool;
        $dirty: bool;
        $valid: bool;
        $invalid: bool;
        $name: string;

        $render(): any;
        $setViewValue(value: any): void;
        $setValidity(validationErrorKey: string, isValid: bool): void;
    }

    interface ModelParser {
        (value: any): any;
    }

    interface ModelFormatter {
        (value: any): any;
    }
}