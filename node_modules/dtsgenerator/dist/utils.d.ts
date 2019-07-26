import glob from 'glob';
export declare function parseFileContent(content: string, filename?: string): any;
export declare function globFiles(pattern: string, options?: glob.IOptions): Promise<string[]>;
