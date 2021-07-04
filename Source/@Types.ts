export type n = null | undefined;
export type FixHTMLProps<T> = Omit<T, "title"> & {title?: string|n};