/// <reference types="react" />
export declare type n = null | undefined;
export declare type FixHTMLProps<T> = Omit<T, "title"> & {
    title?: string | n;
};
export declare type HTMLProps_Fixed<T extends keyof JSX.IntrinsicElements> = Omit<FixHTMLProps<JSX.IntrinsicElements[T]>, "ref">;
