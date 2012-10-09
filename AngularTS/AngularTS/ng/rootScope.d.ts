module angular {
    interface ScopeEvent {
        targetScope: Scope;
        currentScope: Scope;
        name: string;
        stopPropagation(): void;
        preventDefault(): void;
        defaultPrevented: bool;
    }

    interface Scope {
        $new(isolate?: bool): Scope;
        $watch(watchExpression: string, listener: string, objectEquality?: bool): Function;
        $watch(watchExpression: string, listener: Function, objectEquality?: bool): Function;
        $watch(watchExpression: Function, listener: string, objectEquality?: bool): Function;
        $watch(watchExpression: Function, listener: Function, objectEquality?: bool): Function;
        $digest(): void;
        $destroy(): void;
        $eval(exp: Function): any;
        $eval(exp: string): any;
        $evalAsync(exp: Function): void;
        $evalAsync(exp: string): void;
        $apply(exp: Function): any;
        $apply(exp: string): any;
        $on(name: string, listener: (event: ScopeEvent, ...args: any[]) => void ): Function;
        $emit(name: string, ...args: any[]): ScopeEvent;
        $broadcast(name: string, ...args: any[]): ScopeEvent;
    }

    interface RootScopeProvider {
        get(): Scope;

        digestTtl(value?: number): number;
    }
}