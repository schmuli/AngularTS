module angular {
    interface LogService {
        log(...args: any[]);
        warn(...args: any[]);
        info(...args: any[]);
        error(...args: any[]);
    }
}