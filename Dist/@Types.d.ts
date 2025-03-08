export type n = null | undefined;
export type FixHTMLProps<T> = Omit<T, "title"> & {
    title?: any;
};
export type HTMLProps_Fixed<T extends keyof React.JSX.IntrinsicElements> = Omit<FixHTMLProps<React.JSX.IntrinsicElements[T]>, "ref">;
