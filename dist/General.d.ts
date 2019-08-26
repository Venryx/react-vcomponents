/// <reference types="react" />
export declare function ToJSON(obj: any): string;
export declare function FromJSON(json: any): any;
export declare function RemoveDuplicates(items: any): any[];
export declare function Assert(condition: any, messageOrMessageFunc?: string | Function): void;
export declare function AssertWarn(condition: any, messageOrMessageFunc?: string | Function): void;
export declare function ReactChildrenAsText(children: React.ReactNode, valueIfFailed: string): string;
export declare function Clone(obj: any, keepPrototype?: boolean): any;
export declare function IsNaN(obj: any): boolean;
export declare function IsNumber(obj: any, allowNumberObj?: boolean, allowNaN?: boolean): obj is number;
export declare function ToNumber(stringOrFloatVal: string | number, valIfConversionFails?: number): number;
