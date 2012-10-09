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

    /* q (promise/deferred) */
    interface Promise {
        then(callback: Function): Promise;
        then(callback: Function, errback: Function): Promise;
    }

    interface Deffered {
        resolve(val: any): void;
        reject(reason: any): void;
        promise: Promise;
    }

    interface QService {
        defer(): Deffered;
        reject(reason: any): Promise;
        when(value: any): Promise;
        when(value: any, callback: Function): Promise;
        when(value: any, callback: Function, errback: Function): Promise;
        all(promises: Promise[]): Promise;
    }

    /* HTTP */
    interface HttpDefaults {
        transformResponse(data: string): any;
        transformResponse(data: any): any;
        transformRequest(d: any): string;

        headers: any;
    }

    interface HttpConfig {
        method?: string;
        url?: string;
        params?: any;
        data?: any;
        headers?: Object;
        transformRequest?: any;
        transformResponse?: any;
        cache?: any;
        timeout?: number;
        withCredentials?: bool;
    }

    interface HttpResponse {
        data: any;
        status: number;
        headers(): Object;
        headers(name: string): string;
        config: HttpConfig;
    }

    interface HttpCallback {
        (data: any, status?: number, headers?: Function, config?: HttpConfig);
    }

    interface HttpPromise extends Promise {
        then(success: (response: HttpResponse) => void , error?: (response: HttpResponse) => void ): Promise;
        success(fn: HttpCallback): HttpPromise;
        error(fn: HttpCallback): HttpPromise;
    }

    interface HttpProvider extends Provider {
        get(): HttpService;
        defaults: HttpDefaults;
        responseInterceptors: (Promise) => Promise[];
    }

    interface HttpService {
        (config: HttpConfig): HttpPromise;

        get(url: string, config?: HttpConfig): HttpPromise;
        delete (url: string, config?: HttpConfig): HttpPromise;
        head(url: string, config?: HttpConfig): HttpPromise;
        jsonp(url: string, config?: HttpConfig): HttpPromise;
        post(url: string, data: any, config?: HttpConfig): HttpPromise;
        put(url: string, data: any, config?: HttpConfig): HttpPromise;

        defaults: HttpDefaults;
    }
}