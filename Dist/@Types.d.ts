export declare type n = null | undefined;
export declare type FixHTMLProps<T> = Omit<T, "title"> & {
    title?: string | n;
};
