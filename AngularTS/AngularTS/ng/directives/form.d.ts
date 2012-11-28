/// <reference path="input.d.ts" />

module angular {
    interface FormController {
        $name: string;
        $pristine: bool;
        $dirty: bool;
        $valid: bool;
        $invalid: bool;
        $error: any;

        $addControl(control: NgModelController): void;
        $removeControl(control: NgModelController): void;
        $setValidity(validationToken: string, isValid: bool, control): void;
        $setDirty(): void;
    }
}