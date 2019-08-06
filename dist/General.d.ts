/// <reference types="react" />
export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export declare function ToJSON(obj: any): string;
export declare function FromJSON(json: any): any;
export declare function RemoveDuplicates(items: any): any[];
export declare function Assert(condition: any, messageOrMessageFunc?: string | Function): void;
export declare function AssertWarn(condition: any, messageOrMessageFunc?: string | Function): void;
export declare function ReactChildrenAsText(children: React.ReactNode, valueIfFailed: string): string;
