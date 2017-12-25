declare global  {
    const React: any;
}
declare global  {
    function E<E1, E2, E3, E4, E5, E6, E7, E8>(e1?: E1, e2?: E2, e3?: E3, e4?: E4, e5?: E5, e6?: E6, e7?: E7, e8?: E8): E1 & E2 & E3 & E4 & E5 & E6 & E7 & E8;
}
export declare function E<E1, E2, E3, E4, E5, E6, E7, E8>(e1?: E1, e2?: E2, e3?: E3, e4?: E4, e5?: E5, e6?: E6, e7?: E7, e8?: E8): E1 & E2 & E3 & E4 & E5 & E6 & E7 & E8;
export declare function ToJSON(obj: any): string;
export declare function FromJSON(json: any): any;
export declare function RemoveDuplicates(items: any): any[];
declare global  {
    function Assert(condition: any, messageOrMessageFunc?: string | Function): any;
}
export declare function Assert(condition: any, messageOrMessageFunc?: string | Function): void;
declare global  {
    function AssertWarn(condition: any, messageOrMessageFunc?: string | Function): any;
}
export declare function AssertWarn(condition: any, messageOrMessageFunc?: string | Function): void;
export {};
