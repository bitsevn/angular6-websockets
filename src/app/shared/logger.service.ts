export enum LogLevel {
    Off = 0,
    Error,
    Warning,
    Info,
    Debug,
    Table
}

export type LogOutput = (source: string, level: LogLevel, ...args: any[]) => void;

export class Logger {

    static level: LogLevel = LogLevel.Debug;

    static outputs: LogOutput[] = [];

    static instance(source?: string): Logger {
        return new Logger(source);
    }

    static enableProductionMode() {
        Logger.level = LogLevel.Warning;
    }

    constructor(private source?: string) { }

    debug(...args: any[]) {
        this.log(console.log, LogLevel.Debug, args);
    }

    info(...args: any[]) {
        this.log(console.info, LogLevel.Info, args);
    }

    warn(...args: any[]) {
        this.log(console.warn, LogLevel.Warning, args);
    }

    error(...args: any[]) {
        this.log(console.error, LogLevel.Error, args);
    }
    
    private log(func: Function, level: LogLevel, args: any[]) {
        if (level <= Logger.level) {
            const log = this.source ? ['[' + this.source + ']'].concat(args) : args;
            func.apply(console, log);
            Logger.outputs.forEach((output) => output.apply(output, [this.source, level].concat(args)));
        }
    }
    
}