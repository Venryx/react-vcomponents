type n = null | undefined;
type FixHTMLProps<T> = Omit<T, "title"> & {title?: string|n};