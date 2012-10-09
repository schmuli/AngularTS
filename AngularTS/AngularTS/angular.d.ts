module angular {
    function module(name: string): Module;
    function module(name: string, requires: string[]): Module;
    function module(name: string, requires: string[], configFn: Function): Module;
    function module(name: string, configFn: Function): Module;

    function forEach(array: any[], iterator: (item: any) => void );

    function isDefined(value: any): bool;
    function isUndefined(value: any): bool;

    interface Module {
        requires: string[];
        name: string;

        provider(name: string, provider: Provider): Module;
        provider(name: string, provider: () => Provider): Module;
        provider(name: string, provider: any[]): Module;

        factory(name: string, getFn: Function): Module;
        service(name: string, constructor: any): Module;
        value(name: string, value: any): Module;
        constant(name: string, constant: any): Module;

        filter(name: string, factory: any): Module;

        controller(name: string, controller: Function): Module;
        controller(name: string, controller: any[]): Module;

        directive(name: string, directiveFactory: any): Module;

        config(configFn: Function): Module;
        run(block: Function): Module;
    }
    
    interface Scope {
        $apply(exp: Function): any;
        $apply(exp: string): any;
        $destroy();
        $digest();
        $eval(exp: Function): any;
        $eval(exp: string): any;
        $evalAsync(exp: Function): any;
        $evalAsync(exp: string): any;
    }

    interface Provider {
        get(): any;
    }
}