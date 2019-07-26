import commander from 'commander';
export declare class CommandOptions {
    files: string[];
    urls: string[];
    stdin?: boolean;
    out?: string;
    namespace?: string;
    isReadFromStdin(): boolean;
}
declare const opts: CommandOptions;
export default opts;
export declare function initialize(argv: string[]): commander.Command;
export declare function clear(): void;
